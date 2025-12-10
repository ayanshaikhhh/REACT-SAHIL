const employees = [
  {
    id: 1,
    firstname: "Aman",
    email: "employee1@example.com",
    password: "123",
    taskCount : {
      "active" : 2,
      "newTask" : 1,
      "completed" : 1,
      "failed" : 1

      
    },
    tasks: [
      {
        title: "Update Client Records",
        description: "Update all client entries in the CRM.",
        taskDate: "2025-11-20",
        category: "Management",
        active: 2,
        newTask: true,
        completed: false,
        failed: false,
        statusCode: 2  // newTask
      },
      {
        title: "Prepare Monthly Report",
        description: "Create the performance report for November.",
        taskDate: "2025-11-18",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        statusCode: 3  // completed
      },
      {
        title: "Fix Login Bug",
        description: "Debug and fix authentication issue.",
        taskDate: "2025-11-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        statusCode: 4 // failed
      }
    ]
  },
  {
    id: 2,
    firstname: "Rohit",
    email: "employee2@example.com",
    password: "123",
        taskCount : {
      "active" : 2,
      "newTask" : 3,
      "completed" : 1,
      "failed" : 1

    },
    tasks: [
      {
        title: "Design Homepage Banner",
        description: "Create a new promotional banner for homepage.",
        taskDate: "2025-11-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        statusCode: 2
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize all images on website.",
        taskDate: "2025-11-17",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        statusCode: 3
      },
      {
        title: "Social Media Post",
        description: "Create 3 posts for Instagram.",
        taskDate: "2025-11-16",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        statusCode: 4
      }
    ]
  },
  {
    id: 3,
    firstname: "Sameer",
    email: "employee3@example.com",
    password: "123",
        taskCount : {
      "active" : 1,
      "newTask" : 4,
      "completed" : 3,
      "failed" : 1

    },
    tasks: [
      {
        title: "Backend API Setup",
        description: "Create user authentication API.",
        taskDate: "2025-11-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        statusCode: 2
      },
      {
        title: "Database Backup",
        description: "Backup production database.",
        taskDate: "2025-11-18",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        statusCode: 3
      },
      {
        title: "Fix API Rate Limit",
        description: "Add throttling in middleware.",
        taskDate: "2025-11-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        statusCode: 4
      }
    ]
  },
  {
    id: 4,
    firstname: "Farhan",
    email: "employee4@example.com",
    password: "123",
        taskCount : {
      "active" : 2,
      "newTask" : 3,
      "completed" : 2,
      "failed" : 2

    },
    tasks: [
      {
        title: "Network Checkup",
        description: "Run diagnostics for all routers.",
        taskDate: "2025-11-23",
        category: "IT Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        statusCode: 2
      },
      {
        title: "Fix Printer Issue",
        description: "Solve connectivity issue in office printer.",
        taskDate: "2025-11-12",
        category: "IT Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        statusCode: 3
      },
      {
        title: "Install Security Patch",
        description: "Install latest OS updates.",
        taskDate: "2025-11-10",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        statusCode: 4
      }
    ]
  },
  {
    id: 5,
    firstname: "Imran",
    email: "employee5@example.com",
    password: "123",
        taskCount : {
      "active" : 2,
      "newTask" : 1,
      "completed" : 1,
      "failed" : 1

    },
    tasks: [
      {
        title: "Customer Follow-up",
        description: "Call 10 pending customers.",
        taskDate: "2025-11-19",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        statusCode: 2
      },
      {
        title: "Prepare PPT",
        description: "Create presentation for team meeting.",
        taskDate: "2025-11-17",
        category: "Office Work",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        statusCode: 3
      },
      {
        title: "Missed Client Meeting",
        description: "Client meeting was missed due to delay.",
        taskDate: "2025-11-15",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        statusCode: 4
      }
    ]
  }
]





const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]








export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return{employees,admin}

}


