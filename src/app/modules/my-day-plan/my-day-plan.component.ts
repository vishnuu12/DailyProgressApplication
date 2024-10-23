import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-day-plan',
  templateUrl: './my-day-plan.component.html',
  styleUrls: ['./my-day-plan.component.scss'],
})
export class MyDayPlanComponent  implements OnInit {
  dailyPlanForm: FormGroup;
  isFormSubmitted = false;
  submittedData: any;
  currentDate!: Date;

  constructor(private fb: FormBuilder) {
    this.currentDate = new Date(); // Set current date
    this.dailyPlanForm = this.fb.group({
      plans: this.fb.array([this.createPlan()]), // Start with one empty plan
    });
  }

  get plans() {
    return this.dailyPlanForm.get('plans') as FormArray;
  }

  createPlan(): FormGroup {
    return this.fb.group({
      plan: ['', Validators.required],
    });
  }

  addPlan() {
    this.plans.push(this.createPlan());
  }

  removePlan(index: number) {
    this.plans.removeAt(index);
  }

  submitForm() {
    this.submittedData = {
      plans: this.plans.value.map((p:any) => p.plan),
    };
    this.isFormSubmitted = true;
  }

  // Back to Form Method
  backToForm() {
    this.isFormSubmitted = false;
    this.dailyPlanForm.reset(); // Reset form values
    // Clear all form arrays
    this.plans.clear();
  }
  // Back to Form Method
  editToForm() {
    this.isFormSubmitted = false;
  }

  copyToClipboard() {
    const formattedText = this.generateFormattedText();
    navigator.clipboard.writeText(formattedText).then(() => {
      console.log('Copied to clipboard successfully!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  private generateFormattedText(): string {
    const dateText = `Today's Plan (${this.currentDate.toLocaleDateString()}) :\n`;
    const plansText = this.submittedData.plans
      .map((plan: any) => `✨ ${plan}`)
      .join('\n');
    return `${dateText}${plansText}`;
  }
  ngOnInit() {}

}
