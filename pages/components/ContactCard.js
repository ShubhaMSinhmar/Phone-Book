export default function ContactCard({ contact, onDelete }) {
  if (!contact) {
    return <p className="text-center text-gray-500 mt-6">No contacts found.</p>;
  }
  return (
    <div className="p-4 rounded-xl shadow-lg bg-white text-black hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out">
      {contact.name ? (
        <>
          {/* Name */}
          <p className="font-semibold text-xl text-primary tracking-wide">
            {contact.name}
          </p>

          {/* Phone & Email */}
          <div className="text-gray-700 space-t-1">
            <div className="flex items-center gap-2 text-gray-700">
              <span>📞</span>
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>✉️</span>
              <span>{contact.email}</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-gray-500 text-sm leading-5">
            <span>🏠</span>
            <span>
              {contact.street}, {contact.city}, {contact.state},{" "}
              {contact.country} - {contact.pincode}
            </span>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(contact.phone)}
            className="mt-3 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white font-medium py-1.5 px-4 rounded-md transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            🗑 Delete
          </button>
        </>
      ) : (
        <>
          <div className="text-center text-gray-500 mt-10 italic animate-pulse">
            No contacts found. Add your first one above! 🚀
          </div>
        </>
      )}
    </div>
  );
}
