import {
  doc, DocumentData, Firestore, getDoc, getDocs, query, collection, where
} from 'firebase/firestore';

/**
 * Database class
 */
class CloudDb {
  cloudDb: Firestore;

  usersCollection: string;

  constructor(database: Firestore) {
    this.cloudDb = database;
    this.usersCollection = 'users';

  }

  async getUsers(): Promise<DocumentData> {
    const result: DocumentData[] = [];
    const q = query(collection(this.cloudDb, this.usersCollection));
    const docSnap = await getDocs(q);
    console.log('>>>[DB]READ USERS');
    docSnap.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }

  async getSomeUsers(ids: number[]): Promise<DocumentData> {
    const result: DocumentData[] = [];
    const q = query(collection(this.cloudDb, this.usersCollection), where('id', 'in', ids));
    const docSnap = await getDocs(q);
    console.log('>>>[DB]READ USERS BY IDS');
    docSnap.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }

  async getUserById(id: number): Promise<DocumentData> {
    const docRef = doc(this.cloudDb, this.usersCollection, `${id}`)
    const docSnap = await getDoc(docRef);
    console.log('>>>[DB]READ USER');
    if (docSnap.exists()) {
      return docSnap.data();
    }
    throw new Error(
      'Document not found'
    );
  }
}

export default CloudDb;
