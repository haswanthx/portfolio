{/* Replace YOUR_FORMSPREE_ID with the code you got from the website */}
<form 
  action="https://formspree.io/f/YOUR_FORMSPREE_ID_HERE" 
  method="POST" 
  className="flex flex-col gap-4 max-w-md"
>
  <label className="flex flex-col">
    <span className="mb-1 font-semibold">Your Email</span>
    <input 
      type="email" 
      name="email" 
      required 
      className="p-2 rounded bg-gray-800 border border-gray-700 focus:border-orange-500 outline-none"
      placeholder="recruiter@example.com"
    />
  </label>
  
  <label className="flex flex-col">
    <span className="mb-1 font-semibold">Message</span>
    <textarea 
      name="message" 
      required 
      rows="4"
      className="p-2 rounded bg-gray-800 border border-gray-700 focus:border-orange-500 outline-none"
      placeholder="Hi Haswanth, I'd like to discuss a Data Analyst role..."
    ></textarea>
  </label>

  <button 
    type="submit" 
    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
  >
    Send Message
  </button>
</form>