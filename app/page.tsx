{/* Quote Form */}
<div id="quote" className="bg-white py-20">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10">Get My Free Quote</h2>
    
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-3xl">
      <div>
        <label className="block text-sm font-medium mb-2">What do you need?</label>
        <select 
          value={formData.insurance_type}
          onChange={(e) => setFormData({...formData, insurance_type: e.target.value})}
          className="w-full p-4 border rounded-xl"
        >
          <option value="Auto">Auto Insurance</option>
          <option value="Home">Home / Condo</option>
          <option value="Commercial">Commercial</option>
          <option value="Life">Life Insurance</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">ZIP Code</label>
          <input 
            type="text" 
            value={formData.zip_code}
            onChange={(e) => setFormData({...formData, zip_code: e.target.value})}
            className="w-full p-4 border rounded-xl" 
            placeholder="33196"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-4 border rounded-xl" 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-4 border rounded-xl" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-4 border rounded-xl" 
            required 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message (optional)</label>
        <textarea 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-4 border rounded-xl h-24"
          placeholder="Additional details..."
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl font-semibold rounded-2xl transition"
      >
        See My Quote →
      </button>

      {status && (
        <p className={`text-center font-medium ${status.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  </div>
</div>