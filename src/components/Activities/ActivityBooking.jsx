"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import '../../Styles/ActivityBookins.css'

const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time slot.",
  }),
  persons: z.string({
    required_error: "Please select number of persons.",
  }),
});

export function ActivityBookins({ activity }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    // Here you would typically submit to your backend
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="activitybooking-form">
      <div className="activitybooking-form-item">
        <label>Select Date</label>
        <input
          type="date"
          {...form.register("date")}
          className="activitybooking-input"
        />
        <span className="error-message">{form.errors.date?.message}</span>
      </div>

      <div className="activitybooking-form-item">
        <label>Select Time Slot</label>
        <select {...form.register("time")} className="activitybooking-input">
          <option value="" disabled>
            Select a time slot
          </option>
          {activity.schedule.map((slot) => (
            <option
              key={`${slot.startTime}-${slot.endTime}`}
              value={`${slot.startTime}-${slot.endTime}`}
            >
              {slot.startTime} - {slot.endTime} ({slot.availability} spots left)
            </option>
          ))}
        </select>
        <span className="error-message">{form.errors.time?.message}</span>
      </div>

      <div className="activitybooking-form-item">
        <label>Number of Persons</label>
        <select {...form.register("persons")} className="activitybooking-input">
          <option value="" disabled>
            Select number of persons
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num.toString()}>
              {num} {num === 1 ? "Person" : "Persons"}
            </option>
          ))}
        </select>
        <span className="error-message">{form.errors.persons?.message}</span>
      </div>

      <button type="submit" className="activitybooking-button" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Book Now"}
      </button>
    </form>
  );
}
