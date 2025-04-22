// src/app/api/auth/register/route.js
import { hash } from 'bcrypt';
import { findUserByEmail,createUser } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    
    // Validate input
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User already exists with this email' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Hash the password
    const hashedPassword = await hash(password, 10);
    
    // Create the user
    const user = await createUser({
      _id: new ObjectId().toString(),
      name,
      email,
      password: hashedPassword
    });
    
    // Return success but exclude password
    const { password: _, ...userWithoutPassword } = user;
    
    return new Response(
      JSON.stringify({ 
        message: 'User created successfully', 
        user: userWithoutPassword 
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    
    return new Response(
      JSON.stringify({ message: 'Registration failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}