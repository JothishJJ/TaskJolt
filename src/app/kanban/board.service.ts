import { Injectable, inject } from '@angular/core';
import { Board, Task } from './board.model';
import { Auth, authState } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  writeBatch,
  collectionData,
  arrayUnion,
} from '@angular/fire/firestore';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  /**
   * Creates a new board for the user
   */
  async createBoard(data: Board) {
    const user = this.auth.currentUser;
    const collectionRef = collection(this.firestore, 'boards');
    return await addDoc(collectionRef, {
      ...data,
      uid: user?.uid,
      tasks: [
        {
          description: `Wellcome to ${data.title ? data.title : ''}`,
          label: 'purple',
        },
      ],
    })
      // Adds the created Board id to the document
      .then((result) => {
        updateDoc(doc(this.firestore, 'boards', result.id), {
          id: result.id,
        });
      });
  }

  /**
   * Deletes a board
   */
  deleteBoard(taskId: string) {
    const docRef = doc(this.firestore, 'boards', taskId);
    return deleteDoc(docRef);
  }

  /**
   * Updates the tasks on board
   */
  updateTask(boardId: string | undefined, tasks: Task[] | undefined) {
    const docRef = doc(this.firestore, 'boards', boardId ? boardId : '');
    return updateDoc(docRef, { tasks });
  }

  /**
   * Remove a specific task from board
   */
  removeTask(boardId: string, task: Task) {
    const docRef = doc(this.firestore, 'boards', boardId);
    updateDoc(docRef, { tasks: arrayRemove(task) });
  }

  /**
   * Adds a specific task to board
   * Merge is true just in case
   */
  addTask(boardId: string | undefined, task: Task) {
    if (boardId) {
      const docRef = doc(this.firestore, 'boards', boardId);
      updateDoc(docRef, { tasks: arrayUnion(task) });
    }
  }

  /**
   * Get all boards owned by the current user
   */
  getUserBoards() {
    const authState$ = authState(this.auth);
    return authState$.pipe(
      switchMap((user) => {
        if (user) {
          const q = query(
            collection(this.firestore, 'boards'),
            where('uid', '==', user.uid),
            orderBy('priority')
          );
          return collectionData(q);
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Run a batch write to change the priority of boards
   */
  sortBoards(boards: Board[]) {
    const batch = writeBatch(this.firestore);
    const refs = boards.map((b) =>
      doc(this.firestore, 'boards', b.id ? b.id : '')
    );
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }
}
