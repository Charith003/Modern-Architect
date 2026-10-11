import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const serviceOptions = [
  { value: '', label: 'Select a Service' },
  { value: '2d-floor-plan', label: '2D Floor Plan' },
  { value: '3d-elevation', label: '3D Elevation' },
  { value: 'residential-construction', label: 'Residential Construction' },
  { value: 'interior-design', label: 'Interior Design' },
  { value: 'vastu-planning', label: 'Vastu-Based Planning' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  phone: string;
  city: string;
  service: string;
  plotSize: string;
  budget: string;
  details: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }
  if (!data.city.trim()) errors.city = 'City / location is required';
  if (!data.service) errors.service = 'Please select a service';
  return errors;
}

export default function Enquiry() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormData>({
    name: '', phone: '', city: '', service: '',
    plotSize: '', budget: '', details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const buildWhatsAppMessage = () => {
    const serviceLabel = serviceOptions.find((o) => o.value === form.service)?.label || form.service;
    return encodeURIComponent(
      `Hi! I found you on your website and I'm interested in discussing a project.\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*City / Location:* ${form.city}\n` +
      `*Service Required:* ${serviceLabel}\n` +
      (form.plotSize ? `*Plot Size:* ${form.plotSize}\n` : '') +
      (form.budget ? `*Estimated Budget:* ${form.budget}\n` : '') +
      (form.details ? `*Project Details:* ${form.details}\n` : '') +
      `\nPlease let me know how to proceed.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const url = `https://wa.me/919949556301?text=${buildWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-transparent border-b font-body text-[#151515] placeholder-[#151515]/40 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#F36B38] ${
      errors[field] ? 'border-red-500' : 'border-[#151515]/30'
    }`;

  return (
    <section
      id="enquiry"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F36B38 0%, #E55A2B 100%)' }}
      aria-label="Project enquiry form"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: Headline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#FFD43B]" />
              <span className="section-label text-[#FFD43B] tracking-[0.3em]">START A PROJECT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="font-display text-white leading-none mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 0.92 }}
            >
              LET'S BUILD
              <br />
              <span className="text-[#FFD43B]">SOMETHING</span>
              <br />
              MEANINGFUL.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-body text-white/80 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}
            >
              Planning a new home, exploring an elevation design or looking for construction
              and interior solutions? Tell us about your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="tel:+919949556301"
                className="group flex items-center gap-3 text-white font-body font-bold text-sm mb-4 hover:text-[#FFD43B] transition-colors"
              >
                <Phone size={16} />
                +91 99495 56301
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="section-label text-white/50">
                OR FILL THE FORM — WE'LL REACH OUT
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="lg:col-span-3 bg-[#F5F0E7] p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
                <CheckCircle size={48} className="text-[#F36B38]" />
                <h3 className="font-display text-[#151515]" style={{ fontSize: '1.8rem' }}>
                  MESSAGE SENT!
                </h3>
                <p className="font-body text-[#151515]/70 max-w-sm">
                  Your enquiry has been opened in WhatsApp. We'll get back to you shortly to discuss your project.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', city:'', service:'', plotSize:'', budget:'', details:'' }); }}
                  className="mt-4 font-body font-bold text-xs tracking-widest uppercase text-[#F36B38] border-b border-[#F36B38] pb-1 hover:text-[#151515] hover:border-[#151515] transition-colors"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
                <h3
                  className="font-display text-[#151515] mb-8"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
                >
                  TELL US ABOUT YOUR PROJECT
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="enq-name" className="section-label text-[#151515]/60 block mb-2">
                      FULL NAME *
                    </label>
                    <input
                      id="enq-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('name')}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="flex items-center gap-1 text-red-600 text-xs mt-1 font-body">
                        <AlertCircle size={12} />{errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="enq-phone" className="section-label text-[#151515]/60 block mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      id="enq-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={inputClass('phone')}
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="flex items-center gap-1 text-red-600 text-xs mt-1 font-body">
                        <AlertCircle size={12} />{errors.phone}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="enq-city" className="section-label text-[#151515]/60 block mb-2">
                      CITY / PROJECT LOCATION *
                    </label>
                    <input
                      id="enq-city"
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Chittoor, Tirupati"
                      className={inputClass('city')}
                      aria-required="true"
                      aria-describedby={errors.city ? 'city-error' : undefined}
                    />
                    {errors.city && (
                      <p id="city-error" className="flex items-center gap-1 text-red-600 text-xs mt-1 font-body">
                        <AlertCircle size={12} />{errors.city}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service-select" className="section-label text-[#151515]/60 block mb-2">
                      SERVICE REQUIRED *
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass('service')} cursor-pointer`}
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="flex items-center gap-1 text-red-600 text-xs mt-1 font-body">
                        <AlertCircle size={12} />{errors.service}
                      </p>
                    )}
                  </div>

                  {/* Plot Size (optional) */}
                  <div>
                    <label htmlFor="enq-plot" className="section-label text-[#151515]/60 block mb-2">
                      PLOT SIZE <span className="text-[#151515]/30">(OPTIONAL)</span>
                    </label>
                    <input
                      id="enq-plot"
                      name="plotSize"
                      type="text"
                      value={form.plotSize}
                      onChange={handleChange}
                      placeholder="e.g. 30×40 ft, 1200 sq ft"
                      className="w-full bg-transparent border-b border-[#151515]/30 font-body text-[#151515] placeholder-[#151515]/40 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#F36B38]"
                    />
                  </div>

                  {/* Budget (optional) */}
                  <div>
                    <label htmlFor="enq-budget" className="section-label text-[#151515]/60 block mb-2">
                      ESTIMATED BUDGET <span className="text-[#151515]/30">(OPTIONAL)</span>
                    </label>
                    <input
                      id="enq-budget"
                      name="budget"
                      type="text"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="e.g. ₹30–50 Lakhs"
                      className="w-full bg-transparent border-b border-[#151515]/30 font-body text-[#151515] placeholder-[#151515]/40 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#F36B38]"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="mb-8">
                  <label htmlFor="enq-details" className="section-label text-[#151515]/60 block mb-2">
                    PROJECT DETAILS <span className="text-[#151515]/30">(OPTIONAL)</span>
                  </label>
                  <textarea
                    id="enq-details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Share any additional details about your project, requirements or questions..."
                    className="w-full bg-transparent border-b border-[#151515]/30 font-body text-[#151515] placeholder-[#151515]/40 py-3 text-sm outline-none resize-none transition-colors duration-300 focus:border-[#F36B38]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  className="group w-full flex items-center justify-center gap-3 bg-gold-metallic text-[#121212] font-body font-extrabold text-sm tracking-widest uppercase py-5 shadow-xl transition-all duration-300"
                >
                  DISCUSS YOUR PROJECT
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <p className="font-body text-[#151515]/50 text-xs text-center mt-4">
                  Submitting will open WhatsApp with your details pre-filled. No data is stored on our servers.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
