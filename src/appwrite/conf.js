import config from "../conf/config";
import { Client, Databases, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your Appwrite endpoint
      .setProject(config.appwriteProjectId); // Your Appwrite project ID
    this.databases = new Databases(this.client);
  }

  // Method to submit contact form data
  async submitContactForm({ name, email, phone, message }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabase, // Replace with your database ID
        config.appwriteContactId, // Replace with your contact collection ID
        ID.unique(), // Generates a unique document ID
        {
          name,
          email,
          phone,
          message,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: submitContactForm :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
