import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircleIcon, CheckIcon, MessageCircleIcon } from 'lucide-react';

const projectTypes = [
'Civil Construction',
'Bridge Construction',
'Jal Minar',
'Water Supply',
'RO Plant',
'Solar Water System',
'Solar Hi-Mast',
'Other'];

const WHATSAPP_NUMBER = '918895381747';


interface FormState {
  fullName: string;
  organisation: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

const emptyForm: FormState = {
  fullName: '',
  organisation: '',
  phone: '',
  email: '',
  projectType: '',
  location: '',
  message: ''
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (!/^[0-9+\-\s()]{7,16}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.projectType) errors.projectType = 'Select a project type.';
  if (!values.message.trim()) {
    errors.message = 'Please describe the project briefly.';
  } else if (values.message.trim().length < 15) {
    errors.message = 'Please add a little more detail (15 characters minimum).';
  }
  return errors;
}

const fieldClass =
'mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-150 ease-smooth placeholder:text-ink/35 focus:border-royal';

export function ContactForm() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [whatsappOpened, setWhatsappOpened] = useState(false);

  const update =
  (key: keyof FormState) =>
  (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    const message = `Hello Pankaj Raj Infrastructure,

I would like to make a project enquiry.

Name: ${values.fullName.trim()}
Phone: ${values.phone.trim()}
Email: ${values.email.trim() || 'Not provided'}
Company: ${values.organisation.trim() || 'Not provided'}
Project Type: ${values.projectType}
Location: ${values.location.trim() || 'Not provided'}
Message: ${values.message.trim()}

Please contact me regarding this project.

Thank you.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setWhatsappOpened(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-line bg-white p-6 sm:p-9">
      
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}>
          
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={update('fullName')}
            className={fieldClass}
            placeholder="Your name"
            aria-invalid={Boolean(errors.fullName)} />
          
        </Field>

        <Field id="organisation" label="Company Name">
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={values.organisation}
            onChange={update('organisation')}
            className={fieldClass}
            placeholder="Optional" />
          
        </Field>

        <Field id="phone" label="Phone Number" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            className={fieldClass}
            placeholder="Contact number"
            aria-invalid={Boolean(errors.phone)} />
          
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update('email')}
            className={fieldClass}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)} />
          
        </Field>

        <Field
          id="projectType"
          label="Project Type"
          required
          error={errors.projectType}>
          
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={update('projectType')}
            className={fieldClass}
            aria-invalid={Boolean(errors.projectType)}>
            
            <option value="">Select a project type</option>
            {projectTypes.map((type) =>
            <option key={type} value={type}>
                {type}
              </option>
            )}
          </select>
        </Field>

        <Field id="location" label="Location">
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={update('location')}
            className={fieldClass}
            placeholder="Village, district or state" />
          
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label="Your Requirement / Message" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={update('message')}
              className={`${fieldClass} resize-y`}
              placeholder="Briefly describe the scope, site conditions and timeline."
              aria-invalid={Boolean(errors.message)} />
            
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#128c7e] px-7 py-4 font-display text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:bg-[#0d6f63] sm:w-auto">
        <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
        Send Enquiry on WhatsApp
      </button>

      <AnimatePresence>
        {whatsappOpened &&
        <motion.p
          className="mt-4 flex items-center gap-2 text-xs leading-relaxed text-[#128c7e]"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="status">
          <CheckIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp opened. Please press Send to submit your enquiry.
        </motion.p>}
      </AnimatePresence>
    </form>);

}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[11px] font-semibold tech-label text-ink/60">
        
        {label}
        {required &&
        <span className="ml-1 text-solar" aria-hidden="true">
            *
          </span>
        }
      </label>
      {children}
      <AnimatePresence>
        {error &&
        <motion.p
          className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}>
          
            <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {error}
          </motion.p>
        }
      </AnimatePresence>
    </div>);

}