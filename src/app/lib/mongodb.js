// src/lib/mongodb.js
import clientPromise from './db';

// Database and collection names
const dbName = 'heritage_vault';
const collections = {
  users: 'users',
  accounts: 'accounts',
  sessions: 'sessions',
  verificationTokens: 'verification_tokens'
};

// Helper function to get collection
export async function getCollection(collectionName) {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// User operations
export async function findUserByEmail(email) {
  const users = await getCollection(collections.users);
  return users.findOne({ email });
}

export async function findUserById(id) {
  const users = await getCollection(collections.users);
  return users.findOne({ _id: id });
}

export async function createUser(userData) {
  const users = await getCollection(collections.users);
  const result = await users.insertOne({
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return { _id: result.insertedId, ...userData };
}

// Account operations
export async function findAccountByProvider(provider, providerAccountId) {
  const accounts = await getCollection(collections.accounts);
  return accounts.findOne({ provider, providerAccountId });
}

export async function linkAccount(accountData) {
  const accounts = await getCollection(collections.accounts);
  return accounts.insertOne(accountData);
}

// Session operations
export async function createSession(sessionData) {
  const sessions = await getCollection(collections.sessions);
  return sessions.insertOne(sessionData);
}

export async function findSessionByToken(sessionToken) {
  const sessions = await getCollection(collections.sessions);
  return sessions.findOne({ sessionToken });
}

export async function updateSession(sessionToken, data) {
  const sessions = await getCollection(collections.sessions);
  return sessions.updateOne({ sessionToken }, { $set: data });
}

export async function deleteSession(sessionToken) {
  const sessions = await getCollection(collections.sessions);
  return sessions.deleteOne({ sessionToken });
}

// Verification token operations
export async function createVerificationToken(token) {
  const verificationTokens = await getCollection(collections.verificationTokens);
  return verificationTokens.insertOne(token);
}

export async function findVerificationToken(identifier, token) {
  const verificationTokens = await getCollection(collections.verificationTokens);
  return verificationTokens.findOne({ identifier, token });
}

export async function deleteVerificationToken(identifier, token) {
  const verificationTokens = await getCollection(collections.verificationTokens);
  return verificationTokens.deleteOne({ identifier, token });
}