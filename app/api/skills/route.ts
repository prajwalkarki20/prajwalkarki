import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Skill } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.find().sort({ category: 1 });
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();

    const skill = new Skill(body);
    await skill.save();

    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 400 });
  }
}
