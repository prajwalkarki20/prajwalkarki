import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Contact } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const contact = new Contact(body);
    await contact.save();

    return NextResponse.json(
      { message: 'Message sent successfully', data: contact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating contact message:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create contact message' },
      { status: 400 }
    );
  }
}
