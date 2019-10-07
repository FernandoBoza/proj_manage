export default class CONSTANTS {

   public static menu = [
      {
         label: "Home",
         icon: "fa-home-alt",
         notification: 0,
         url: "dashboard"
      },
      {
         label: "Projects",
         icon: "fa-rocket",
         notification: 0,
         url: "projects"
      },
      {
         label: "Department",
         icon: "fa-user-friends",
         notification: 0,
         url: "departments"
      },
      {
         label: "Tasks",
         icon: "fa-tasks",
         notification: 0,
         url: "tasks"
      },
      {
         label: "Inbox",
         icon: "fa-inbox",
         notification: 1,
         url: "inbox"
      },
      {
         label: "Notifications",
         icon: "fa-bell",
         notification: 2,
         url: "notifications"
      },
      {
         label: "Calendar",
         icon: "fa-calendar",
         notification: 0,
         url: "calendar"
      },
      {
         label: "Settings",
         icon: "fa-cog",
         notification: 0,
         url: "settings"
      },
   ]

   public static notifications = [
      {
         date: "today",
         notifArray: [
            {
               task_title: "Set up aws SE2 for client",
               department: "Development",
               message: "Jane Smith completed Call with AWS",
               status: "complete",
               timelog: "6 hours ago",
               user: "Jane Smith",
               src: "https://randomuser.me/api/portraits/women/6.jpg",
            },
            {
               task_title: "Fix sales contract - EMEA",
               department: "Sales",
               message: "Maggie Lopez created task Transfer DB to Mongo",
               status: "pending",
               timelog: "8 hours ago",
               user: "Maggie Lopez",
               src: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               task_title: "Call with AWS",
               department: "Development",
               message: "Jean Parker added you to task Fix Calendar UI",
               status: "pending",
               timelog: "8 hours ago",
               user: "Jean Parker",
               src: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               task_title: "Finsish IBC broshure",
               department: "Marketing",
               message: "John Doe deleted task Migrate frontend to jQuery",
               status: "deleted",
               timelog: "2 days ago",
               user: "John Doe",
               src: "https://randomuser.me/api/portraits/men/32.jpg"
            }
         ]
      },
      {
         date: "Yesterday",
         notifArray: [
            {
               task_title: "Fix sales contract - EMEA",
               department: "Sales",
               message: "Maggie Lopez created task Transfer DB to Mongo",
               status: "pending",
               timelog: "8 hours ago",
               user: "Maggie Lopez",
               src: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               task_title: "Create UI for iOS native",
               department: "Development",
               message: "Jean Parker added a new task",
               status: "pending",
               timelog: "8 hours ago",
               user: "Jean Parker",
               src: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               task_title: "Working on NBC Medi aplan",
               department: "Marketing",
               message: "John Doe deleted task Migrate frontend to jQuery",
               status: "deleted",
               timelog: "2 days ago",
               user: "John Doe",
               src: "https://randomuser.me/api/portraits/men/32.jpg"
            }
         ]
      }
   ]

   public static departments = [
      {
         label: "Development - US",
         users: [
            {
               name: "Lizzie Parker",
               email: "lParker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
               depHead: true
            },
            {
               name: "John Doe",
               email: "jdoe@email.com",
               phone: "305 888 4331",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               name: "Jean Parker",
               email: "jparker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
               name: "Maggie Lopez",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               name: "Jane Smith",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
      {
         label: "Development - EU",
         users: [
            {
               name: "Lizzie Parker",
               email: "lParker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
               depHead: true
            },
            {
               name: "John Doe",
               email: "jdoe@email.com",
               phone: "305 888 4331",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               name: "Jean Parker",
               email: "jparker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
               name: "Maggie Lopez",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               name: "Jane Smith",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
      {
         label: "Sales",
         users: [
            {
               name: "Lizzie Parker",
               email: "lParker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
               depHead: true
            },
            {
               name: "John Doe",
               email: "jdoe@email.com",
               phone: "305 888 4331",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               name: "Jean Parker",
               email: "jparker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
               name: "Maggie Lopez",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               name: "Jane Smith",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
      {
         label: "Marketing",
         users: [
            {
               name: "Lizzie Parker",
               email: "lParker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
               depHead: true
            },
            {
               name: "John Doe",
               email: "jdoe@email.com",
               phone: "305 888 4331",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               name: "Jean Parker",
               email: "jparker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
               name: "Maggie Lopez",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               name: "Jane Smith",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
      {
         label: "Engineering",
         users: [
            {
               name: "Lizzie Parker",
               email: "lParker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
               depHead: true
            },
            {
               name: "John Doe",
               email: "jdoe@email.com",
               phone: "305 888 4331",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               name: "Jean Parker",
               email: "jparker@email.com",
               phone: "305 888 4331",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
               name: "Maggie Lopez",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               name: "Jane Smith",
               email: "mLopez@email.com",
               phone: "305 888 4331",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
   ]

   public static tasks_completed = [
      {
         title: "Set up aws SE2 for client",
         author: "Jane Smith",
         department: "Development",
         dateLog: "1 day ago",
         status: "complete"
      },
      {
         title: "Fix sales contract - EMEA",
         author: "Jane Smith",
         department: "Sales",
         dateLog: "1 day ago",
         status: "complete"
      },
      {
         title: "Call with AWS",
         author: "Jane Smith",
         department: "Development",
         dateLog: "6 hours ago",
         status: "complete"
      },
      {
         title: "Finsish IBC broshure",
         author: "Jane Smith",
         department: "Marketing",
         dateLog: "1 day ago",
         status: "complete"
      },
      {
         title: "Set up license for FOX",
         author: "Jane Smith",
         department: "Engineering",
         dateLog: "1 day ago",
         status: "complete"
      },
   ]

   public static tasks_pending = [
      {
         title: "Set up azure AI",
         author: "John Doe",
         department: "Development",
         dateLog: "09/28/2019",
         status: "in_progress"
      },
      {
         title: "Finish media brochure for Intel",
         author: "Jane Smith",
         department: "Marketing",
         dateLog: "09/28/2019",
         status: "in_progress"
      },
      {
         title: "Working on upload panel",
         author: "John Doe",
         department: "Development",
         dateLog: "09/30/2019",
         status: "in_progress"
      },
      {
         title: "Seek interface on panel",
         author: "Jean Parker",
         department: "Engineering",
         dateLog: "10/19/2019",
         status: "in_progress"
      },
      {
         title: "Fix AI for translation",
         author: "Maggie Lopez",
         department: "Development",
         dateLog: "10/20/2019",
         status: "in_progress"
      },
      {
         title: "Create project",
         author: "Jane Smith",
         department: "Development",
         dateLog: "10/10/2019",
         status: "in_progress"
      },
   ]

   public static messages = [
      {
         name: "John Doe",
         img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
         date: "Sept 01",
         unread: 2,
         thread: [
            {
               time: "10:05 AM",
               message: "did you see the packages I sent you ?",
               name: "John Doe",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               time: "10:15 AM",
               message: "Yea! they're really cheaaap",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
               time: "10:22 AM",
               message: "I knowwww",
               name: "John Doe",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            }
         ]
      },
      {
         name: "Maggie Lopez",
         img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
         date: "Sept 01",
         unread: 0,
         thread: [
            {
               time: "1:05 PM",
               message: "Meeting @ 4",
               name: "John Doe",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               time: "1:10 PM",
               message: "got it",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
               time: "1:32 PM",
               message: "I'll order pizza",
               name: "John Doe",
               img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            },
            {
               time: "1:37 PM",
               message: "yaaass",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
         ]
      },
      {
         name: "Lizzie Parker",
         img: "https://randomuser.me/api/portraits/women/6.jpg",
         date: "Aug 28",
         unread: 0,
         thread: [
            {
               time: "1:10 PM",
               message: "Meeting at 4",
               name: "Lizzie Parker",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
            },
            {
               time: "2:10 PM",
               message: "got it, Maggie mentioned it to me",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
               time: "1:20 AM",
               message: "when you get in, please make sure the invoices have been sent",
               name: "Lizzie Parker",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
            },
            {
               time: "9:47 AM",
               message: "sure, just got it, i'll let you know when it's ready",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
               time: "10:04 AM",
               message: "perfect thanks!",
               name: "Lizzie Parker",
               img: "https://randomuser.me/api/portraits/women/6.jpg",
            },
         ]
      }
   ]

   public static projects = [
      {
         title: "Holiday 19 Social Media Campaign",
         department: "Marketing",
         dueDate: "Oct 01 2019",
         followers: [
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg"
         ],
         tasks: [
            {
               title: "Create copy for fall and winter months",
               status: "complete",
               description: "Need to work on the copy for IG, FB, TW, and LK @Maggie can you help with the TW and LK copy?",
               dueDate: "Sept 29 2019",
               creator: "Jamie Smith",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
               ]
            },
            {
               title: "Visuals for Oct and November",
               status: "In progress",
               description: "We need the visuals imgs for FB, IG, and Twitter",
               dueDate: "Sept 22 2019",
               creator: "John Doe",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg"
               ]
            }
         ],
         files: [
            {
               src: "../../assets/imgs/file_1.jpg",
               fileName: "bg_img_1.jpg",
               uploader: "Jamie Smith",
               fileSize: "1.4mb"
            },
            {
               src: "../../assets/imgs/file_2.jpg",
               fileName: "bg_img_1.jpg",
               uploader: "Jamie Smith",
               fileSize: "1.4mb"
            },
            {
               src: "../../assets/imgs/file_3.jpg",
               fileName: "bg_img_1.jpg",
               uploader: "Jamie Smith",
               fileSize: "1.4mb"
            },
         ]
      },
      {
         title: "Convert DB to SQL on AWS",
         department: "Development",
         dueDate: "Sept 30 2019",
         followers: [
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg"
         ],
         tasks: [
            {
               title: "Create copy for fall and winter months",
               status: "complete",
               description: "Need to work on the copy for IG, FB, TW, and LK @Maggie can you help with the TW and LK copy?",
               dueDate: "Sept 29 2019",
               creator: "Jamie Smith",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
               ]
            },
            {
               title: "Visuals for Oct and November",
               status: "In progress",
               description: "We need the visuals imgs for FB, IG, and Twitter",
               dueDate: "Sept 22 2019",
               creator: "John Doe",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg"
               ]
            }
         ]
      },
      {
         title: "Create UI native for iOS app",
         department: "Development",
         dueDate: "Sept 30 2019",
         followers: [
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg"
         ],
         tasks: [
            {
               title: "Create copy for fall and winter months",
               status: "complete",
               description: "Need to work on the copy for IG, FB, TW, and LK @Maggie can you help with the TW and LK copy?",
               dueDate: "Sept 29 2019",
               creator: "Jamie Smith",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
               ]
            },
            {
               title: "Visuals for Oct and November",
               status: "In progress",
               description: "We need the visuals imgs for FB, IG, and Twitter",
               dueDate: "Sept 22 2019",
               creator: "John Doe",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg"
               ]
            }
         ]
      },
      {
         title: "Convert Client A to platinum plan",
         department: "Engineering",
         dueDate: "Sept 30 2019",
         followers: [
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
            "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg"
         ],
         tasks: [
            {
               title: "Create copy for fall and winter months",
               status: "complete",
               description: "Need to work on the copy for IG, FB, TW, and LK @Maggie can you help with the TW and LK copy?",
               dueDate: "Sept 29 2019",
               creator: "Jamie Smith",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
               ]
            },
            {
               title: "Visuals for Oct and November",
               status: "In progress",
               description: "We need the visuals imgs for FB, IG, and Twitter",
               dueDate: "Sept 22 2019",
               creator: "John Doe",
               followers: [
                  "https://randomuser.me/api/portraits/women/6.jpg",
                  "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg"
               ]
            }
         ]
      }
   ]
}