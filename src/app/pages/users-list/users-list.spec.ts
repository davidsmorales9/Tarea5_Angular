import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersList]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match post userId with the corresponding user id and render the required fields', () => {
    expect(component.postsWithUsers.length).toBeGreaterThan(0);

    const firstMatch = component.postsWithUsers[0];

    expect(firstMatch.userId).toBeGreaterThan(0);
    expect(firstMatch.userFullName.length).toBeGreaterThan(0);
    expect(firstMatch.age).toBeGreaterThan(0);
    expect(firstMatch.username.length).toBeGreaterThan(0);
    expect(firstMatch.postId).toBeGreaterThan(0);
    expect(firstMatch.postTitle.length).toBeGreaterThan(0);
  });
});
