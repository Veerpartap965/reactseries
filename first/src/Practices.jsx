export const Practices = () => {
    // return <h2>Interview Questions</h2>
    const students =[6];
    console.log(Boolean(students.length) );
    console.log(students.length);
    
    return (
        <>
         {/* <p>{students.length && "No student found"}</p> */}
        {/* 1st */}
          {/* <p>{students.length ===0 && "No student found"}</p> */}
        {/* 2nd  */}
        {/* <p>{!students.length && "No student found"}</p> */}
        {/* 3rd */}
         {/* <p>{Boolean(students.length) && "No student found"}</p> */}
           <p>{!Boolean(students.length) && "No student found"}</p>
        <p>Number of students: {students.length}</p>
        </>
    );
};
