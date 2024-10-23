import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-positive-gratitude',
  templateUrl: './positive-gratitude.component.html',
  styleUrls: ['./positive-gratitude.component.scss'],
})
export class PositiveGratitudeComponent  implements OnInit {
  gratitudeForm: FormGroup;
  submittedData: any = null;
  isFormSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.gratitudeForm = this.fb.group({
      healthyFood: this.fb.array([]),
      socialActivities: this.fb.array([]),
      familyGratitude: this.fb.array([]),
      friendsGratitude: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  // Form Array Getters
  get healthyFood(): FormArray {
    return this.gratitudeForm.get('healthyFood') as FormArray;
  }

  get socialActivities(): FormArray {
    return this.gratitudeForm.get('socialActivities') as FormArray;
  }

  get familyGratitude(): FormArray {
    return this.gratitudeForm.get('familyGratitude') as FormArray;
  }

  get friendsGratitude(): FormArray {
    return this.gratitudeForm.get('friendsGratitude') as FormArray;
  }

  // Methods to Add/Remove Form Array Items
  addHealthyFood() {
    this.healthyFood.push(this.fb.group({ item: '' }));
  }

  removeHealthyFood(index: number) {
    this.healthyFood.removeAt(index);
  }

  addSocialActivity() {
    this.socialActivities.push(this.fb.group({ item: '' }));
  }

  removeSocialActivity(index: number) {
    this.socialActivities.removeAt(index);
  }

  addFamilyGratitude() {
    this.familyGratitude.push(this.fb.group({ item: '' }));
  }

  removeFamilyGratitude(index: number) {
    this.familyGratitude.removeAt(index);
  }

  addFriendsGratitude() {
    this.friendsGratitude.push(this.fb.group({ item: '' }));
  }

  removeFriendsGratitude(index: number) {
    this.friendsGratitude.removeAt(index);
  }

  // Submit Form Method
  submitForm() {
    if (this.gratitudeForm.valid) {
      this.submittedData = this.gratitudeForm.value;
      this.isFormSubmitted = true;
    }
  }

  // Copy to Clipboard Method
  copyToClipboard() {
    let displayMessage = '💥❄️ Positive❄️💥\n';

    // Healthy Food Section
    if (this.submittedData.healthyFood.length > 0) {
      displayMessage += '✨ Healthy food:\n';
      this.submittedData.healthyFood.forEach((food: any) => {
        displayMessage += `▫️ ${food.item}\n`;
      });
    }

    // Social Activities Section
    if (this.submittedData.socialActivities.length > 0) {
      displayMessage += '✨ Social activities:\n';
      this.submittedData.socialActivities.forEach((activity: any) => {
        displayMessage += `▫️ ${activity.item}\n`;
      });
    }

    displayMessage += '💥🙏🏻 Gratitude🙏🏻💥\n';

    // Family Gratitude Section
    if (this.submittedData.familyGratitude.length > 0) {
      displayMessage += '✨ Family:\n';
      this.submittedData.familyGratitude.forEach((family: any) => {
        displayMessage += `▫️ ${family.item}\n`;
      });
    }

    // Friends Gratitude Section
    if (this.submittedData.friendsGratitude.length > 0) {
      displayMessage += '✨ FriendsOrOthers:\n';
      this.submittedData.friendsGratitude.forEach((friend: any) => {
        displayMessage += `▫️ ${friend.item}\n`;
      });
    }

    // Copy the formatted message to the clipboard
    navigator.clipboard.writeText(displayMessage).then(
      () => {
        console.log('Data copied to clipboard');
      },
      (err) => {
        console.error('Could not copy data: ', err);
      }
    );
  }


  // Back to Form Method
  backToForm() {
    this.isFormSubmitted = false;
    this.gratitudeForm.reset(); // Reset form values
    // Clear all form arrays
    this.healthyFood.clear();
    this.socialActivities.clear();
    this.familyGratitude.clear();
    this.friendsGratitude.clear();
  }
  // Back to Form Method
  editToForm() {
    this.isFormSubmitted = false;
  }
}
