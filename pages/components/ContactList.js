import ContactCard from './ContactCard';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {contacts.map(contact => (
        <ContactCard key={contact.phone} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
}
