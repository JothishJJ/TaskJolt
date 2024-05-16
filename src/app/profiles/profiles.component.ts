import { Component } from '@angular/core';

@Component({
  selector: 'app-profiles',
  template: `
    <div class="w-full h-full items-center justify-center">
      <p>
        Profile
      </p>
      <button  class="font-semibold p-4" appSignOut>LogOut</button>
    </div>
  `,
})
export class ProfilesComponent {
}
