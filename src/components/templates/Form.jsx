// Form primitives for template lead/submit forms. Forms render fields but never submit anywhere.

// input.button-dark.button-primary (same tokens as shared Button 'dark-primary')
export const SubmitButton = ({ label = 'Submit', className = '' }) => (
  <button
    type="submit"
    className={`flex h-10 w-full items-center justify-center rounded-10 bg-neutral-0 p-2 text-heading-m text-solid-900 transition-all duration-200 ease-[ease] hover:bg-neutral-50 focus:shadow-focus-dark focus:outline-none active:bg-neutral-200 ${className}`}
  >
    {label}
  </button>
)

// reCAPTCHA (304×78) stand-in
export const RecaptchaPlaceholder = ({ className = '' }) => (
  <div className={`flex h-[78px] w-[304px] max-w-full items-center gap-3 rounded-[3px] border border-[#d3d3d3] bg-[#f9f9f9] px-3 text-[14px] text-[#222] ${className}`}>
    <span className="size-6 rounded-[2px] border-2 border-[#c1c1c1] bg-solid-0" />
    <span>reCAPTCHA placeholder</span>
  </div>
)

export const noSubmit = (e) => e.preventDefault()
