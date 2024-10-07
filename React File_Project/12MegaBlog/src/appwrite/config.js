import conf from "../conf/Conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  Client = new Client();
  dstsbases;
  bucket;
  constructor() {
    this.Client.setEndpoint(conf.appwrteUrl).setProject(conf.appwrteProjectId);
    this.databases = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
  }
  async createPost({ titel, slug, content, featureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwrteDatabaseId,
        conf.appwrteCollectionId,
        slug,
        {
          titel,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }
  async updatePost(slug, { titel, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrteDatabaseId,
        conf.appwrteCollectionId,
        slug,
        {
          titel,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.deletePost.deleteDocument(
        conf.appwrteCollectionId,
        conf.appwrteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrteCollectionId,
        conf.appwrteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }
  async getPost(queries = [queries.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrteDatabaseId,
        conf.appwrteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }
  //file uplod service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwrteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }
  async deletFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwrteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }
  getFilePriview(fileId) {
    return this.bucket.getFilePreview(conf.appwrteBucketId, fileId);
  }
}

const service = new Service();
export default service;
