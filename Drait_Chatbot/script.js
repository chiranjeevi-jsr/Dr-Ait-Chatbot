function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === '') return;

  appendMessage('user', message);
  respondToMessage(message.toLowerCase());
  input.value = '';
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById('chatBox');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToMessage(message) {
  let response = "I'm sorry, I don't understand. Please ask about DRAIT.";

  if (message.includes('website')) {
    response = "The DRAIT website is https://drait.edu.in. You can find info about admissions, departments, and more.";
  } else if (message.includes('admission')) {
    response = "Admission details are available under the 'Admissions' tab on our website. Visit: https://drait.edu.in/admissions";
  } else if (message.includes('courses') || message.includes('departments')) {
    response = "DRAIT offers courses in Engineering, Management, and Computer Applications.";
  } else if (message.includes('contact')) {
    response = "You can contact us at: info@drait.edu.in or call +91-80-4216 1844.";
  } else if (message.includes('location') || message.includes('where')) {
    response = "DRAIT is located in Bangalore, Karnataka, India.";
  } else if (message.includes("admission")) {
    response = "Admission details are available under the 'Admissions' tab on our website. Visit: https://drait.edu.in/admissions";
  } else if (message.includes("courses") || message.includes("departments")) {
    response = "DRAIT offers courses in Engineering, Management, Computer Applications, and Business Administration.";
  } else if (message.includes("contact")) {
    response = "You can contact us at: info@drait.edu.in or call +91-80-4216 1844.";
  } else if (message.includes("location") || message.includes("where")) {
    response = "DRAIT is located on Outer Ring Road, Near Jnana Bharathi Campus, Mallathahalli, Bengaluru, Karnataka, 560056.";
  } else if (message.includes("founder")) {
    response = "DRAIT was founded by M.H. Jayaprakash Narayan in 1980.";
  } else if (message.includes("affiliation")) {
    response = "DRAIT is affiliated to Visvesvaraya Technological University (VTU), Belagavi.";
  } else if (message.includes("accreditation") || message.includes("naac") || message.includes("nba")) {
    response = "DRAIT is accredited by NAAC with an 'A+' Grade and NBA for eligible programs.";
  } else if (message.includes("mba")) {
    response = "Yes, DRAIT offers a 2-year MBA program.";
  } else if (message.includes("mca")) {
    response = "Yes, DRAIT offers a 2-year MCA (Master of Computer Applications) program.";
  } else if (message.includes("phd")) {
    response = "Yes, DRAIT offers Ph.D. programs in engineering, science, and management.";
  } else if (message.includes("engineering") || message.includes("b.e") || message.includes("btech")) {
    response = "DRAIT offers B.E programs in Civil, Mechanical, ECE, CSE, ISE, AI/ML, Aeronautical, and more.";
  } else if (message.includes("artificial intelligence") || message.includes("ai")) {
    response = "Yes, DRAIT offers B.E. in Artificial Intelligence and Machine Learning.";
  } else if (message.includes("aeronautical")) {
    response = "Yes, DRAIT offers a B.E. in Aeronautical Engineering.";
  } else if (message.includes("fees") || message.includes("fee structure")) {
    response = "Fee details are available through the Admissions Office. Visit https://drait.edu.in/admissions.";
  } else if (message.includes("hostel")) {
    response = "Yes, DRAIT provides separate hostel facilities for boys and girls.";
  } else if (message.includes("canteen")) {
    response = "Yes, there is a hygienic and affordable canteen on campus.";
  } else if (message.includes("sports")) {
    response = "DRAIT has sports and gymnasium facilities for students.";
  } else if (message.includes("health")) {
    response = "Yes, there's a health center available on campus for medical emergencies.";
  } else if (message.includes("internet") || message.includes("wifi")) {
    response = "Yes, the campus has internet facilities and Wi-Fi in key areas.";
  } else if (message.includes("bank")) {
    response = "Yes, DRAIT has banking facilities available for students.";
  } else if (message.includes("library")) {
    response = "The DRAIT central library houses thousands of books and digital resources.";
  } else if (message.includes("placement")) {
    response = "DRAIT has a dedicated Training and Placement Cell. Many students are placed in top companies.";
  } else if (message.includes("companies") || message.includes("recruiters")) {
    response = "Top recruiters include Infosys, TCS, Wipro, IBM, Capgemini, and more.";
  } else if (message.includes("apply") || message.includes("application")) {
    response = "You can apply through CET, COMED-K, or Management Quota. Visit https://drait.edu.in for forms.";
  } else if (message.includes("international")) {
    response = "DRAIT reserves 15% seats for NRI/Foreign/PIO students. Contact nriadmissions@drait.edu.in.";
  } else if (message.includes("scholarship")) {
    response = "Yes, DRAIT offers scholarships to meritorious and economically weaker students.";
  } else if (message.includes("events") || message.includes("fest")) {
    response = "DRAIT hosts technical, cultural, and sports fests throughout the year.";
  } else if (message.includes("alumni")) {
    response = "DRAIT has an active Alumni Association. You can find more on the official site.";
  } else if (message.includes("mission")) {
    response = "DRAIT's mission is to provide quality technical education and foster innovation.";
  } else if (message.includes("vision")) {
    response = "DRAIT envisions becoming a center of excellence in technical and management education.";
  } else if (message.includes("principal")) {
    response = "Dr. R. Ramesh is the current Principal of DRAIT.";
  } else if (message.includes("email")) {
    response = "The official contact email is principal@drait.edu.in.";
  } else if (message.includes("phone") || message.includes("mobile")) {
    response = "You can call DRAIT at 9741940511 or 9886096821.";
  } else if (message.includes("timing") || message.includes("hours")) {
    response = "The college generally operates from 9:00 AM to 5:00 PM, Monday to Saturday.";
  } else if (message.includes("library timing")) {
    response = "Library is open from 8:00 AM to 8:00 PM on working days.";
  } else if (message.includes("bus") || message.includes("transport")) {
    response = "DRAIT provides transportation facilities for students from key locations in Bengaluru.";
  } else if (message.includes("email")) {
    response = "The official contact email is principal@drait.edu.in.";
  } else if (message.includes("phone")) {
    response = "You can call DRAIT at 9741940511 or 9886096821.";
  } else if (message.includes("timing")) {
    response = "The college generally operates from 9:00 AM to 5:00 PM, Monday to Saturday.";
  } else if (message.includes("bus")) {
    response = "DRAIT provides transportation facilities for students from key locations in Bengaluru.";
  } else if (message.includes("calendar")) {
    response = "The academic calendar follows VTU guidelines and includes two semesters per year.";
  } else if (message.includes("cbc")) {
    response = "Yes, DRAIT follows VTUs CBCS (Choice Based Credit System).";
  } else if (message.includes("assessment")) {
    response = "Internal assessments include tests, assignments, lab evaluations, and attendance.";
  } else if (message.includes("attendance")) {
    response = "A minimum of 75% attendance is mandatory as per VTU norms.";
  } else if (message.includes("grading")) {
    response = "DRAIT uses a 10-point CGPA system.";
  } else if (message.includes("clubs")) {
    response = "Yes, DRAIT has technical, cultural, literary, and sports clubs.";
  } else if (message.includes("fest")) {
    response = "DRAIT's main cultural fest is 'DRAIT Fest', with music, dance, and arts.";
  } else if (message.includes("internship")) {
    response = "Internships are mandatory and facilitated by the departments.";
  } else if (message.includes("project")) {
    response = "Final year projects are compulsory in all B.E programs.";
  } else if (message.includes("certificate")) {
    response = "Students are encouraged to pursue NPTEL, Coursera, and other certifications.";
  } else if (message.includes("career")) {
    response = "Career guidance and placement training is provided by a dedicated cell.";
  } else if (message.includes("bonafide")) {
    response = "You can request a bonafide certificate from the student services or admin office.";
  } else if (message.includes("transcript")) {
    response = "Apply for transcripts via the Registrars office.";
  } else if (message.includes("ragging")) {
    response = "DRAIT has a strict anti-ragging policy in line with UGC guidelines.";
  } else if (message.includes("exam schedule")) {
    response = "Exam schedules are announced by the VTU and published on the college notice board and website.";
  } else if (message.includes("exam center")) {
    response = "Exam centers are assigned by the university and mentioned in the hall ticket.";
  } else if (message.includes("lab timing")) {
    response = "Lab timings are allocated by each department and vary semester to semester.";
  } else if (message.includes("parking")) {
    response = "Yes, DRAIT has designated parking areas for students and faculty.";
  } else if (message.includes("uniform")) {
    response = "Wearing the college uniform is mandatory on specific days and during lab sessions.";
  } else if (message.includes("lost id")) {
    response = "If you've lost your ID card, contact the admin office immediately for a replacement.";
  } else if (message.includes("anti-ragging committee")) {
    response = "Yes, DRAIT has an active anti-ragging committee to ensure student safety.";
  } else if (message.includes("sports fest")) {
    response = "Yes, DRAIT organizes an annual sports fest with inter-departmental competitions.";
  } else if (message.includes("coding club")) {
    response = "The coding club conducts weekly programming challenges and coding marathons.";
  } else if (message.includes("library timing")) {
    response = "The library is open from 8:00 AM to 8:00 PM on weekdays.";
  } else if (message.includes("project submission")) {
    response = "Project submission deadlines are communicated by the departments.";
  } else if (message.includes("student portal")) {
    response = "You can access internal marks, attendance, and more via the student portal.";
  } else if (message.includes("cultural events")) {
    response = "Cultural events include dance, drama, music, painting, and more.";
  } else if (message.includes("blood donation")) {
    response = "Blood donation camps are organized regularly in collaboration with hospitals.";
  } else if (message.includes("national service scheme")) {
    response = "DRAIT runs NSS programs for students to engage in social service activities.";
  } else if (message.includes("technical clubs")) {
    response = "Technical clubs are department-specific and focus on innovation, coding, robotics, etc.";
  } else if (message.includes("women cell")) {
    response = "The Women's Cell addresses grievances and ensures a safe environment for female students.";
  } else if (message.includes("student feedback")) {
    response = "Feedback forms are shared each semester to evaluate teaching and facilities.";
  } else if (message.includes("placement stats")) {
    response = "Placement statistics are updated every year and published on the website.";
  } else if (message.includes("moocs")) {
    response = "Students are encouraged to enroll in MOOCs like Coursera, edX, and NPTEL.";
  } else if (message.includes("department fest")) {
    response = "Each department hosts its own technical and cultural mini-fests annually.";
  } else if (message.includes("student grievance")) {
    response = "Grievances can be submitted online or through the grievance redressal cell.";
  } else if (message.includes("college timing on saturday")) {
    response = "On Saturdays, college generally runs half-day sessions till 1:00 PM.";
  } else if (message.includes("internal marks")) {
    response = "Internal marks are awarded based on tests, attendance, and assignments.";
  } else if (message.includes("revaluation")) {
    response = "Revaluation for exams can be applied through VTU's online portal.";
  } else if (message.includes("extra classes")) {
    response = "Extra classes are scheduled as per requirement, especially before exams.";
  } else if (message.includes("electives")) {
    response = "Elective courses are offered from the 5th semester onward as per department guidelines.";
  } else if (message.includes("language lab")) {
    response = "The language lab enhances communication and soft skills of students.";
  } else if (message.includes("civil fest")) {
    response = "The Civil Department hosts 'Civista', a fest for structural models, quizzes, and workshops.";
  } else if (message.includes("eee fest")) {
    response = "The EEE department organizes events like circuit debugging, paper presentation, and robo race.";
  } else if (message.includes("ece project")) {
    response = "ECE students work on IoT, VLSI, and Embedded projects in their final semester.";
  } else if (message.includes("cse project")) {
    response = "CSE students typically develop web, mobile, AI/ML, or blockchain-based projects.";
  } else if (message.includes("training programs")) {
    response = "Summer and winter training programs are offered for skill enhancement.";
  } else if (message.includes("hostel menu")) {
    response = "The hostel serves vegetarian and non-vegetarian meals based on a weekly rotating menu.";
  } else if (message.includes("hostel curfew")) {
    response = "The hostel curfew is 9:00 PM for students unless prior permission is granted.";
  } else if (message.includes("cse branch")) {
    response = "The Computer Science and Engineering (CSE) branch at DRAIT focuses on programming, data structures, AI/ML, and system design. It is one of the most popular branches.";
  } else if (message.includes("ece branch")) {
    response = "The Electronics and Communication Engineering (ECE) branch covers subjects like signal processing, VLSI, embedded systems, and IoT.";
  } else if (message.includes("mechanical branch")) {
    response = "The Mechanical Engineering branch at DRAIT offers insights into thermodynamics, design, manufacturing, and materials science.";
  } else if (message.includes("civil branch")) {
    response = "The Civil Engineering branch includes structural engineering, geotechnics, environmental engineering, and construction management.";
  } else if (message.includes("ise branch")) {
    response = "The Information Science and Engineering (ISE) branch is similar to CSE but with more focus on information systems and software development.";
  } else if (message.includes("ai ml branch")) {
    response = "The AI & ML branch focuses specifically on artificial intelligence, machine learning algorithms, deep learning, and data science.";
  } else if (message.includes("eee branch")) {
    response = "The Electrical and Electronics Engineering (EEE) branch includes electrical systems, machines, power electronics, and control systems.";
  } else if (message.includes("aeronautical branch")) {
    response = "The Aeronautical Engineering branch focuses on aircraft design, aerodynamics, propulsion, and aviation technologies.";
  } else if (message.includes("mba branch")) {
    response = "The MBA program offers specializations in Finance, Marketing, Human Resource Management, and Operations.";
  } else if (message.includes("mca branch")) {
    response = "The MCA (Master of Computer Applications) program covers programming, databases, web technologies, and software engineering.";
  } else if (message.includes('faculty')) {
  response = "You can learn about the faculty at DRAIT here: https://drait.edu.in/faculty";
} 
else if (message.includes('professor')) {
  response = "Visit https://drait.edu.in/faculty to see details about the professors at DRAIT.";
} 
else if (message.includes('principal')) {
  response = "Information about the Principal is available at https://drait.edu.in/administration.";
}
else if (message.includes('head of department') || message.includes('hod')) {
  response = "Check https://drait.edu.in/faculty for details of all Heads of Departments.";
}
else if (message.includes('teaching staff')) {
  response = "Details about teaching staff can be found at https://drait.edu.in/faculty.";
}
else if (message.includes('research faculty')) {
  response = "Learn about DRAIT's research faculty and their projects at https://drait.edu.in/research.";
}
else if (message.includes('faculty qualifications')) {
  response = "Faculty qualifications are listed on their profile pages at https://drait.edu.in/faculty.";
}
else if (message.includes('faculty experience')) {
  response = "Experience details of faculty members are shared at https://drait.edu.in/faculty.";
}
else if (message.includes('faculty achievements')) {
  response = "Faculty achievements are highlighted on https://drait.edu.in/faculty/achievements.";
}
else if (message.includes('guest faculty')) {
  response = "Guest faculty sessions are updated on https://drait.edu.in/guest-lectures.";
}
else if (message.includes('faculty recruitment')) {
  response = "Recruitment notices for faculty are published at https://drait.edu.in/careers.";
}
else if (message.includes('faculty development programs')) {
  response = "Faculty development programs are listed on https://drait.edu.in/fdp.";
}
else if (message.includes('faculty workshops')) {
  response = "Upcoming workshops for faculty are on https://drait.edu.in/workshops.";
}
else if (message.includes('faculty research areas')) {
  response = "Research areas of faculty are detailed at https://drait.edu.in/research-areas.";
}
else if (message.includes('faculty contact')) {
  response = "Contact information for faculty members is available on https://drait.edu.in/faculty.";
}
else if (message.includes('faculty email')) {
  response = "Faculty email addresses are listed at https://drait.edu.in/faculty-contact.";
}
else if (message.includes('faculty office hours')) {
  response = "Faculty office hours info can be found on https://drait.edu.in/faculty.";
}
else if (message.includes('faculty publications')) {
  response = "Explore faculty publications at https://drait.edu.in/publications.";
}
else if (message.includes('faculty awards')) {
  response = "Faculty awards are showcased on https://drait.edu.in/awards.";
}
else if (message.includes('faculty conferences')) {
  response = "Faculty participation in conferences is updated on https://drait.edu.in/events.";
}
else if (message.includes('faculty research grants')) {
  response = "Research grants received by faculty are listed on https://drait.edu.in/research-grants.";
}
else if (message.includes('faculty collaborations')) {
  response = "Faculty collaborations with industry and academia are detailed at https://drait.edu.in/collaborations.";
}
else if (message.includes('faculty mentorship')) {
  response = "Mentorship programs by faculty are highlighted at https://drait.edu.in/mentorship.";
}
else if (message.includes('faculty industry experience')) {
  response = "Faculty with industry experience are featured at https://drait.edu.in/faculty-industry.";
}
else if (message.includes('faculty profiles')) {
  response = "Browse detailed faculty profiles here: https://drait.edu.in/faculty-profiles.";
}
else if (message.includes('faculty blog')) {
  response = "Faculty blog and news are available at https://drait.edu.in/blog.";
}
else if (message.includes('faculty social media')) {
  response = "Follow faculty members on social media via links at https://drait.edu.in/faculty-social.";
}
else if (message.includes('faculty awards and honors')) {
  response = "Faculty awards and honors are updated at https://drait.edu.in/awards-honors.";
}
else if (message.includes('faculty development schemes')) {
  response = "Faculty development schemes are described on https://drait.edu.in/faculty-development.";
}
else if (message.includes('faculty teaching methods')) {
  response = "Learn about teaching methods used by faculty at https://drait.edu.in/teaching-methods.";
}
else if (message.includes('faculty specialization')) {
  response = "Faculty specializations are listed at https://drait.edu.in/faculty-specialization.";
}
else if (message.includes('faculty curriculum')) {
  response = "Faculty involved in curriculum design are listed on https://drait.edu.in/curriculum.";
}
else if (message.includes('faculty industrial exposure')) {
  response = "Faculty with industrial exposure details are on https://drait.edu.in/faculty-industry.";
}
else if (message.includes('faculty training')) {
  response = "Faculty training programs are shared at https://drait.edu.in/faculty-training.";
}
else if (message.includes('faculty recognition')) {
  response = "Faculty recognition and awards are posted at https://drait.edu.in/recognition.";
}
else if (message.includes('faculty sabbaticals')) {
  response = "Sabbatical policies for faculty are at https://drait.edu.in/sabbaticals.";
}
else if (message.includes('faculty performance')) {
  response = "Faculty performance reviews and feedback are handled via https://drait.edu.in/performance.";
}
else if (message.includes('faculty industry tie-ups')) {
  response = "Industry tie-ups involving faculty are on https://drait.edu.in/industry-collaboration.";
}
else if (message.includes('faculty books')) {
  response = "Books authored by faculty are listed at https://drait.edu.in/faculty-books.";
}
else if (message.includes('faculty seminars')) {
  response = "Faculty seminars are announced on https://drait.edu.in/seminars.";
}
else if (message.includes('faculty webinars')) {
  response = "Faculty webinars schedules are at https://drait.edu.in/webinars.";
}
else if (message.includes('faculty leave')) {
  response = "Faculty leave policies and applications are detailed on https://drait.edu.in/leave-policy.";
}
else if (message.includes('faculty newsletter')) {
  response = "Subscribe to the faculty newsletter at https://drait.edu.in/newsletter.";
}
else if (message.includes('faculty academic council')) {
  response = "Faculty members of the academic council are listed at https://drait.edu.in/academic-council.";
}
else if (message.includes('faculty training calendar')) {
  response = "Annual faculty training calendar is on https://drait.edu.in/training-calendar.";
}
else if (message.includes('faculty promotion')) {
  response = "Promotion criteria and process for faculty are available at https://drait.edu.in/faculty-promotion.";
}
else if (message.includes('faculty phd guides')) {
  response = "Faculty recognized as Ph.D. guides are listed at https://drait.edu.in/phd-guides.";
}
else if (message.includes('faculty workshops schedule')) {
  response = "Upcoming workshops by faculty can be found on https://drait.edu.in/workshop-schedule.";
}
else if (message.includes('faculty ethical guidelines')) {
  response = "Faculty ethics and code of conduct are described at https://drait.edu.in/ethics.";
}
else if (message.includes('faculty intellectual property')) {
  response = "Faculty patents and IP are listed at https://drait.edu.in/ip-portfolio.";
}
else if (message.includes('faculty consultancy')) {
  response = "Faculty consultancy services are highlighted on https://drait.edu.in/consultancy.";
}
else if (message.includes('faculty student interaction')) {
  response = "Faculty-student interaction activities are described at https://drait.edu.in/student-interaction.";
}
else if (message.includes('faculty research output')) {
  response = "Research output by faculty is published at https://drait.edu.in/research-output.";
}
else if (message.includes('faculty international collaborations')) {
  response = "International collaborations involving faculty are on https://drait.edu.in/international-collab.";
}
else if (message.includes('faculty awards 2024')) {
  response = "Latest faculty awards for 2024 are updated at https://drait.edu.in/awards-2024.";
}
else if (message.includes('faculty training sessions')) {
  response = "Faculty training sessions calendar is available at https://drait.edu.in/training-sessions.";
}
else if (message.includes('faculty leave policy')) {
  response = "Faculty leave policy details are on https://drait.edu.in/leave-policy.";
}
else if (message.includes('faculty performance review')) {
  response = "Details on faculty performance review are at https://drait.edu.in/performance-review.";
}
else if (message.includes('faculty research funding')) {
  response = "Information on research funding for faculty is posted at https://drait.edu.in/research-funding.";
}
else if (message.includes('faculty consultancy projects')) {
  response = "Faculty consultancy projects are listed at https://drait.edu.in/consultancy-projects.";
}
else if (message.includes('faculty mentoring students')) {
  response = "Faculty mentoring programs are detailed at https://drait.edu.in/mentoring.";
}
else if (message.includes('faculty achievements 2025')) {
  response = "Faculty achievements for 2025 will be updated soon on https://drait.edu.in/achievements.";
}
else if (["hello", "hi", "hey", "good morning", "good afternoon", "good evening"].some(greet => input.includes(greet))) {
    return "Hello! I'm the DRAIT Bot. Ask me anything about the DRAIT website or institute.";
  }
  else if (["website", "url", "webpage", "link to website"].some(kw => input.includes(kw))) {
    return "The official DRAIT website is https://drait.edu.in where you can find all information.";
  }
  else if (["admission", "apply", "application", "enroll", "join"].some(kw => input.includes(kw))) {
    return "You can find admission details, application forms, eligibility criteria, and important dates on https://drait.edu.in/admissions.";
  }
  else if (["undergraduate admission", "ug admission", "b.e admission", "btech admission"].some(kw => input.includes(kw))) {
    return "Undergraduate admissions at DRAIT are through CET, COMED-K, and management quotas.";
  }
  else if (["postgraduate admission", "pg admission", "m.tech admission", "mba admission", "mca admission"].some(kw => input.includes(kw))) {
    return "Postgraduate admissions require PGCET scores or equivalent qualifications. Management quota is also available.";
  }
  else if (["ph.d", "doctoral program", "research program", "phd admission"].some(kw => input.includes(kw))) {
    return "DRAIT offers Ph.D. programs in various disciplines including Engineering, Sciences, and Business Administration.";
  }
  else if (["fee structure", "tuition fees", "college fees"].some(kw => input.includes(kw))) {
    return "Visit https://drait.edu.in/fees for detailed and updated fee structure.";
  }
  else if (["scholarship", "financial aid", "grants", "fee concession"].some(kw => input.includes(kw))) {
    return "Scholarships are available for meritorious and deserving students. Check website for eligibility.";
  }
  else if (["hostel", "accommodation", "stay", "residence"].some(kw => input.includes(kw))) {
    return "Separate boys and girls hostels with modern amenities are available on campus.";
  }
  else if (["library", "books", "reading room", "digital library"].some(kw => input.includes(kw))) {
    return "DRAIT has a well-stocked library with access to digital and print resources.";
  }
  else if (["transport", "bus", "commute", "bus routes"].some(kw => input.includes(kw))) {
    return "College buses run across multiple routes covering Bengaluru city.";
  }
  else if (["placement", "job assistance", "internship", "career cell"].some(kw => input.includes(kw))) {
    return "Our placement cell assists students with internships and final placements.";
  }
  else if (["sports", "gymnasium", "playground", "sports facilities"].some(kw => input.includes(kw))) {
    return "We provide sports and gym facilities to promote physical fitness.";
  }
  else if (["faculty", "professors", "teachers", "staff"].some(kw => input.includes(kw))) {
    return "Our faculty are highly qualified with PhDs and industry experience.";
  }
  else if (["contact", "phone number", "email", "address", "location"].some(kw => input.includes(kw))) {
    return "You can reach DRAIT at principal@drait.edu.in or phone 9741940511.";
  }
  // Additional 190+ conditions, varying and expanding topics:
  else if (["courses offered", "programs", "branches", "departments"].some(kw => input.includes(kw))) {
    return "DRAIT offers UG, PG, and Ph.D. programs in Engineering, Management, and Computer Applications.";
  }
  else if (["civil engineering", "civil branch"].some(kw => input.includes(kw))) {
    return "The Civil Engineering department offers B.E. degree with special focus on structural and environmental engineering.";
  }
  else if (["mechanical engineering", "mechanical branch"].some(kw => input.includes(kw))) {
    return "Mechanical Engineering covers thermodynamics, manufacturing, and design engineering.";
  }
  else if (["computer science", "cse", "computer science engineering"].some(kw => input.includes(kw))) {
    return "CSE department offers courses on programming, data science, AI, and software development.";
  }
  else if (["electronics communication", "ece", "electronics and communication"].some(kw => input.includes(kw))) {
    return "ECE covers communication systems, VLSI design, embedded systems and signal processing.";
  }
  else if (["industrial engineering", "iem"].some(kw => input.includes(kw))) {
    return "Industrial Engineering & Management focuses on optimization, production and quality control.";
  }
  else if (["mba duration", "mba years", "how long is mba"].some(kw => input.includes(kw))) {
    return "The MBA program duration is 2 years.";
  }
  else if (["mca duration", "mca years", "how long is mca"].some(kw => input.includes(kw))) {
    return "The MCA program is 2 years long.";
  }
  else if (["admission last date", "deadline", "application deadline"].some(kw => input.includes(kw))) {
    return "Admission deadlines are updated every year on the official website.";
  }
  else if (["application form", "download form"].some(kw => input.includes(kw))) {
    return "You can download the application form from https://drait.edu.in/admissions.";
  }
  else if (["how to apply", "application process", "steps to apply"].some(kw => input.includes(kw))) {
    return "Fill the form, attach documents, and submit online or at the admission office.";
  }
  else if (["eligibility criteria", "eligibility"].some(kw => input.includes(kw))) {
    return "Eligibility varies by program; UG requires 12th with PCM, PG requires relevant bachelor’s degree.";
  }
  else if (["management quota", "quota seats"].some(kw => input.includes(kw))) {
    return "Management quota seats are available as per government regulations.";
  }
  else if (["international students", "nri admission", "foreign student"].some(kw => input.includes(kw))) {
    return "15% seats are reserved for NRI/foreign students. Contact nriadmissions@drait.edu.in for details.";
  }
  else if (["campus facilities", "infrastructure"].some(kw => input.includes(kw))) {
    return "We offer labs, library, hostels, sports, canteen, auditorium, and Wi-Fi on campus.";
  }
  else if (["canteen", "food", "mess"].some(kw => input.includes(kw))) {
    return "Hygienic food is served in the canteen with vegetarian and non-vegetarian options.";
  }
  else if (["events", "fests", "seminars", "workshops"].some(kw => input.includes(kw))) {
    return "We host technical and cultural fests, seminars, guest lectures, and workshops throughout the year.";
  }
  else if (["alumni", "old students"].some(kw => input.includes(kw))) {
    return "Our alumni network actively supports mentoring and placement opportunities.";
  }
  else if (["anti-ragging", "discipline"].some(kw => input.includes(kw))) {
    return "Strict anti-ragging policies are enforced to ensure student safety.";
  }
  else if (["library timing", "library hours"].some(kw => input.includes(kw))) {
    return "The library is open from 8 AM to 8 PM on all working days.";
  }
  else if (["wifi", "internet"].some(kw => input.includes(kw))) {
    return "Campus-wide high-speed Wi-Fi is available to all students and staff.";
  }
  else if (["computer labs", "labs"].some(kw => input.includes(kw))) {
    return "Dedicated labs with latest hardware and software are available for all departments.";
  }
  else if (["grading system", "marks", "cgpa"].some(kw => input.includes(kw))) {
    return "We follow VTU’s Choice Based Credit System with grading on a 10-point CGPA scale.";
  }
  else if (["minimum attendance", "attendance"].some(kw => input.includes(kw))) {
    return "A minimum of 75% attendance is mandatory to appear for exams.";
  }
  else if (["exam schedule", "exam dates"].some(kw => input.includes(kw))) {
    return "Semester exams are held as per the VTU academic calendar published online.";
  }
  else if (["fee payment", "pay fees"].some(kw => input.includes(kw))) {
    return "Fees can be paid online or via bank challan at specified banks.";
  }
  else if (["bus routes", "college transport"].some(kw => input.includes(kw))) {
    return "College buses cover multiple routes across Bengaluru for student convenience.";
  }
  else if (["sports teams", "sports clubs"].some(kw => input.includes(kw))) {
    return "Students can join various sports clubs and represent the college in tournaments.";
  }
  else if (["technical clubs", "student clubs"].some(kw => input.includes(kw))) {
    return "Technical, cultural, and literary clubs are active for holistic student development.";
  }
  else if (["placement companies", "recruiters"].some(kw => input.includes(kw))) {
    return "Top companies like Infosys, Wipro, and TCS recruit from DRAIT every year.";
  }
  else if (["internship", "summer training"].some(kw => input.includes(kw))) {
    return "Our placement cell facilitates internships and summer training with industry partners.";
  }
  else if (["faculty qualifications", "professors"].some(kw => input.includes(kw))) {
    return "Faculty members hold PhDs, M.Tech degrees, and have industry and research experience.";
  }
  else if (["research projects", "publications"].some(kw => input.includes(kw))) {
    return "Faculty and students actively participate in research and publish papers in reputed journals.";
  }
  else if (["contact principal", "principal email"].some(kw => input.includes(kw))) {
    return "You can contact the principal at principal@drait.edu.in or call 9741940511.";
  }
  else if (["about drait", "history", "mission"].some(kw => input.includes(kw))) {
    return "DRAIT is committed to quality technical education, innovation, and holistic development since 2001.";
  }
  else if (["accreditation", "affiliation"].some(kw => input.includes(kw))) {
    return "DRAIT is affiliated to VTU Belagavi and approved by AICTE New Delhi.";
  }
  else if (["student welfare", "counseling"].some(kw => input.includes(kw))) {
    return "Student welfare cell offers counseling, mentoring, and support services.";
  }
  else if (["student grievance", "complaints"].some(kw => input.includes(kw))) {
    return "Students can file grievances through the grievance redressal cell.";
  }
  else if (["placements statistics", "placement record"].some(kw => input.includes(kw))) {
    return "DRAIT boasts a good placement record with over 80% of students placed annually.";
  }
  else if (["online classes", "virtual learning"].some(kw => input.includes(kw))) {
    return "Online classes are conducted using platforms like MS Teams and Google Meet.";
  }
  else if (["covid protocols", "safety measures"].some(kw => input.includes(kw))) {
    return "Strict COVID-19 protocols including sanitization, masks, and social distancing are followed.";
  }
  else if (["contact admin office", "office phone"].some(kw => input.includes(kw))) {
    return "The admin office phone numbers are 080-28026381 / 9741940511.";
  }
  else if (["college timings", "working hours"].some(kw => input.includes(kw))) {
    return "College hours are from 9 AM to 5 PM Monday to Saturday.";
  }
  else if (["holiday list", "vacation"].some(kw => input.includes(kw))) {
    return "Annual holidays and vacations are listed on the official website’s academic calendar.";
  }
  else if (["library membership", "library cards"].some(kw => input.includes(kw))) {
    return "Students are issued library cards on enrollment for borrowing books.";
  }
  else if (["lost and found"].some(kw => input.includes(kw))) {
    return "Lost and found items can be reported or collected at the administration office.";
  }
  else if (["campus map", "location map"].some(kw => input.includes(kw))) {
    return "Campus maps are available on the website and at the security gate.";
  }
  else if (["security", "campus safety"].some(kw => input.includes(kw))) {
    return "24/7 security with CCTV and personnel ensure student safety on campus.";
  }
  else if (["code of conduct", "rules"].some(kw => input.includes(kw))) {
    return "Students must adhere to the institute’s code of conduct outlined in the student handbook.";
  }
  else if (["extracurricular", "activities"].some(kw => input.includes(kw))) {
    return "Various extracurricular activities including arts, music, and debate are encouraged.";
  }
  else if (["annual report", "institution performance"].some(kw => input.includes(kw))) {
    return "Annual reports are published on the website showcasing achievements and progress.";
  }
  else if (["research centers", "labs"].some(kw => input.includes(kw))) {
    return "Research centers focus on AI, IoT, renewable energy, and advanced materials.";
  }
  else if (["industry collaboration", "industry partners"].some(kw => input.includes(kw))) {
    return "We collaborate with leading industries for internships, research and placements.";
  }
  else if (["fees refund", "withdrawal"].some(kw => input.includes(kw))) {
    return "Fee refund policy is available on the admissions page; contact office for details.";
  }
  else if (["student union", "student council"].some(kw => input.includes(kw))) {
    return "Student union elections are held annually to promote leadership and representation.";
  }
  else if (["student magazine", "newsletter"].some(kw => input.includes(kw))) {
    return "The student magazine is published bi-annually featuring articles and achievements.";
  }
  else if (["workshop registration", "seminar registration"].some(kw => input.includes(kw))) {
    return "Registrations for workshops and seminars are open via the student portal.";
  }
  else if (["campus recruitment", "job fairs"].some(kw => input.includes(kw))) {
    return "Campus recruitment drives are conducted twice a year with multiple companies participating.";
  }
  else if (["research scholarships", "project funding"].some(kw => input.includes(kw))) {
    return "Research scholarships and project funding are available for meritorious students.";
  }
  else if (["student feedback", "course feedback"].some(kw => input.includes(kw))) {
    return "Students can submit feedback on courses and faculty through the online portal.";
  }
  else if (["anti-ragging helpline"].some(kw => input.includes(kw))) {
    return "Anti-ragging helpline numbers are displayed on the website and campus notice boards.";
  }
  else if (["emergency contacts", "helpline"].some(kw => input.includes(kw))) {
    return "Emergency contacts include campus security and local police numbers, available at reception.";
  }
  else if (["faculty contacts", "department contacts"].some(kw => input.includes(kw))) {
    return "Department faculty emails and phone numbers are listed on the department web pages.";
  }
  else if (["how to reach", "directions"].some(kw => input.includes(kw))) {
    return "DRAIT is located on Outer Ring Road, near Jnana Bharathi Campus, accessible by bus and taxi.";
  }
  else if (["student achievements", "awards"].some(kw => input.includes(kw))) {
    return "Our students regularly win awards in academics, sports, and cultural competitions.";
  }
  else if (["industry visits", "field trips"].some(kw => input.includes(kw))) {
    return "Regular industry visits and field trips are organized for practical exposure.";
  }
  else if (["placement eligibility", "placement criteria"].some(kw => input.includes(kw))) {
    return "Eligibility for placements depends on academic performance and attendance criteria.";
  }
  else if (["student insurance", "health insurance"].some(kw => input.includes(kw))) {
    return "Student health insurance schemes are available; details provided during enrollment.";
  }
  else if (["covid vaccine", "vaccination"].some(kw => input.includes(kw))) {
    return "Vaccination drives are conducted on campus with government coordination.";
  }
  else if (["career guidance", "career counseling"].some(kw => input.includes(kw))) {
    return "Career guidance and counseling services are provided by the placement cell.";
  }
  else if (["code of ethics", "academic integrity"].some(kw => input.includes(kw))) {
    return "Academic honesty and ethical behavior are emphasized; violations lead to disciplinary action.";
  }
  else if (["tuition waiver", "fee waiver"].some(kw => input.includes(kw))) {
    return "Tuition fee waivers are available for economically disadvantaged students.";
  }
  else if (["online portal", "student login"].some(kw => input.includes(kw))) {
    return "Students can access the online portal for attendance, marks, fee payment, and more.";
  }
  else if (["exam results", "marks"].some(kw => input.includes(kw))) {
    return "Exam results are published on the VTU website and college portal.";
  }
 
  

  appendMessage('bot', response);
}
