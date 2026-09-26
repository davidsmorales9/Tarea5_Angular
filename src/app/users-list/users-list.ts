import { Component } from '@angular/core';
import { POST_LIST_DATA } from '../../data/post-list-data';
import { USER_LIST_DATA } from '../../data/user-list-data';

type PostWithUser = {
  postId: number;
  postTitle: string;
  userId: number;
  userFullName: string;
  age: number;
  username: string;
};

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  postsWithUsers: PostWithUser[] = POST_LIST_DATA.posts
    .map((post) => {
      const user = USER_LIST_DATA.users.find((item) => item.id === post.userId);

      if (!user) {
        return null;
      }

      return {
        postId: post.id,
        postTitle: post.title,
        userId: user.id,
        userFullName: `${user.firstName} ${user.lastName}`,
        age: user.age,
        username: user.username,
      };
    })
    .filter((item): item is PostWithUser => item !== null);
}
