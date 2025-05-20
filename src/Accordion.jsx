import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is an accordion?",
    content:
      "An accordion is a collapsible component that allows users to expand and collapse sections of content. It helps save space while organizing information in a clean, hierarchical manner.",
  },
  {
    id: 2,
    title: "How does it work?",
    content:
      "When a user clicks on an accordion header, the corresponding content panel expands or collapses. Typically, only one panel is open at a time, but some implementations allow multiple panels to be open simultaneously.",
  },
  {
    id: 3,
    title: "Why use an accordion?",
    content:
      "Accordions are useful for: 1) Organizing FAQ sections, 2) Displaying lengthy content in compact spaces, 3) Creating mobile-friendly navigation, 4) Improving content scanning by revealing only what users need.",
  },
  {
    id: 4,
    title: "Accessibility considerations",
    content:
      "1) Use proper ARIA attributes (aria-expanded, aria-controls), 2) Ensure keyboard navigation works, 3) Maintain heading hierarchy, 4) Provide clear focus states, 5) Consider screen reader users when toggling content.",
  },
];

const Accordion = () => {
  const [isOpen, setOpen] = useState(1);

  const handleAccordion = (id) => {
    setOpen(isOpen === id ? null : id);
  };

  return (
    <>
      {accordionData.map((item) => (
        <div style={{ padding: "10px", width: "100%" }} key={item.id}>
          <div
            onClick={() => handleAccordion(item.id)}
            style={{
              borderRadius: "30px",
              padding: "20px",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.06)",
            }}
          >
            <strong style={{ cursor: "pointer" }}>{item.title}</strong>
          </div>
          {isOpen === item.id && (
            <p style={{ padding: "0 30px" }}>{item.content}</p>
          )}
        </div>
      ))}
    </>
  );
};
export default Accordion;
