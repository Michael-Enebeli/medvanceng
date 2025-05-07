export const faqData = [
    {
      id: 1,
      question: "Lorem ipsum ipsum lorem ipum",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, reprehenderit necessitatibus voluptatibus ipsam officia natus magni voluptate enim incidunt velit?"
    },
    {
      id: 2,
      question: "Lorem ipsum ipsum lorem ipum",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, reprehenderit necessitatibus voluptatibus ipsam officia natus magni voluptate enim incidunt velit?"
    },
    {
      id: 3,
      question: "Lorem ipsum ipsum lorem ipum",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, reprehenderit necessitatibus voluptatibus ipsam officia natus magni voluptate enim incidunt velit?"
    },
    {
      id: 4,
      question: "Lorem ipsum ipsum lorem ipum",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, reprehenderit necessitatibus voluptatibus ipsam officia natus magni voluptate enim incidunt velit?"
    },
    {
      id: 5,
      question: "Lorem ipsum ipsum lorem ipum",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, reprehenderit necessitatibus voluptatibus ipsam officia natus magni voluptate enim incidunt velit?"
    },
  ];
  
  export function handleToggle(clickedIndex, currentOpen, setOpen) {
    if (currentOpen === clickedIndex) {
      setOpen(null);
    } else {
      setOpen(clickedIndex);
    }
  }
  