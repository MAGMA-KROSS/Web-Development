import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar';
import TaskBar from './components/TaskBar';
import Task from './components/Task';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [AddTaskBtn, setAddTaskBtn] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      Sno: tasks.length + 1,
      Task: taskName,
      CompletionDate: completionDate,
      Priority: priority,
      Category: category,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setCompletionDate("");
    setPriority("");
    setCategory("");
  };


  const [width, setWidth] = useState("250px");
  const [SVGShow, setSVGShow] = useState("none");
  const [SVGShow2, setSVGShow2] = useState("block");
  const [opacity1, setopacity1] = useState(1);
  const [opacity2, setopacity2] = useState(0);
  const [bodyColor, setbodyColor] = useState("ffffff");
  const [btnColorDark, setbtnColorDark] = useState("#8183f4");
  const [darkModeStatus, setdarkModeStatus] = useState(false)
  const [SidebarColorDark, setSidebarColorDark] = useState("#F0F0F8");
  const [toggleRight, settoggleRight] = useState("0px");
  const [toggleLeft, settoggleLeft] = useState("32px");
  const [ShowHomeTask, setShowHomeTask] = useState(false)
  const [ShowWorkTask, setShowWorkTask] = useState(false)
  const [ShowCollegeTask, setShowCollegeTask] = useState(false)
  const [ShowMyDayTask, setShowMyDayTask] = useState(false)
  const [sortType, setSortType] = useState("");
  const [ShowSort , setShowSort] = useState(false);
  const [SortBtn, setSortBtn] = useState(false)

  const priorityOrder = { High: 3, Medium: 2, Low: 1 };

  const sortTasks = (tasks) => {
    let sortedTasks = [...tasks];

    if (sortType === "priority") {
      sortedTasks.sort((a, b) => priorityOrder[b.Priority] - priorityOrder[a.Priority]);
    } else if (sortType === "completion") {
      sortedTasks.sort((a, b) => new Date(a.CompletionDate) - new Date(b.CompletionDate));
    }

    return sortedTasks;
  };

  const filterHomeTasks = (tasks) => {
    return tasks.filter(task => task.Category === "Home");
  };

  const homeTasks = filterHomeTasks(tasks);

  const filterWorkTasks = (tasks) => {
    return tasks.filter(task => task.Category === "Work");
  };

  const WorkTasks = filterWorkTasks(tasks);

  const filterMyDayTasks = (tasks) => {
    return tasks.filter(task => task.Category === "MyDay");
  };

  const MyDayTasks = filterMyDayTasks(tasks);

  const filterCollegeTasks = (tasks) => {
    return tasks.filter(task => task.Category === "College");
  };

  const CollegeTasks = filterCollegeTasks(tasks);



  const HideSidebar = () => {
    if (width === "250px") {
      setWidth("0px")
      setSVGShow("block")
      setSVGShow2("none")
      setSortBtn(false)
    }
    else {
      setWidth("250px")
      setSVGShow("none")
      setSVGShow2("block")
      setSortBtn(false)
    }
  };

  const DarkMOde = () => {
    if (toggleLeft === "32px") {
      settoggleRight("32px")
      settoggleLeft("96px")
      setopacity1(0)
      setopacity2(1)
      setbodyColor("111827")
      setbtnColorDark("#5254c7")
      setSidebarColorDark("#2e3647")
      setdarkModeStatus(true)
      setSortBtn(false)
    }
    else {
      settoggleRight("0px")
      settoggleLeft("32px")
      setopacity1(1)
      setopacity2(0)
      setbodyColor("ffffff")
      setbtnColorDark("#8183f4")
      setSidebarColorDark("#F0F0F8")
      setdarkModeStatus(false)
      setSortBtn(false)
    }
  }
  const AllTask = () => {
    setShowHomeTask(false)
    setShowCollegeTask(false)
    setShowWorkTask(false)
    setShowMyDayTask(false)
    setSortBtn(false)
    setShowSort(false)
  }
  const HomeTask = () => {
    setShowHomeTask(true)
    setShowCollegeTask(false)
    setShowWorkTask(false)
    setShowMyDayTask(false)
    setSortBtn(false)
    setShowSort(false)

  }
  const WorkTask = () => {
    setShowWorkTask(true)
    setShowHomeTask(false)
    setShowCollegeTask(false)
    setShowMyDayTask(false)
    setSortBtn(false)
    setShowSort(false)
  }
  const CollegeTask = () => {
    setShowCollegeTask(true)
    setShowWorkTask(false)
    setShowMyDayTask(false)
    setShowHomeTask(false)
    setSortBtn(false)
    setShowSort(false)
  }
  const MyDayTask = () => {
    setShowMyDayTask(true)
    setShowHomeTask(false)
    setShowCollegeTask(false)
    setShowWorkTask(false)
    setSortBtn(false)
    setShowSort(false)
  }



  return (
    <>
      <div className="h-[100%] flex w-[100%] overflow-hidden">
        <Sidebar width={width} WorkTask={WorkTask} MyDayTask={MyDayTask} CollegeTask={CollegeTask} allTask={AllTask} hometask={HomeTask} SidebarColorDark={SidebarColorDark} />
        <div style={{ backgroundColor: `#${bodyColor}` }} className="w-[100%] ">
          <Navbar HideSidebar={HideSidebar} btnColorDark={btnColorDark} SVGShow={SVGShow} opacity1={opacity1} opacity2={opacity2} SVGShow2={SVGShow2} DarkMode={DarkMOde} toggleRight={toggleRight} toggleLeft={toggleLeft} />
          <div onClick={() => AddTaskBtn === true ? (setAddTaskBtn(false), setSortBtn(false)) : (setSortBtn(false), setAddTaskBtn(true))} className="h-[55px] w-[55px] AddBtn cursor-pointer hover:bg-[#9596e0] text-[65px] rounded-full flex items-center absolute bottom-[12px] right-[12px] text-white bg-[#6366f1] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-[30px] h-[30px] m-auto ">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div style={{
            borderRadius: SortBtn ? '8px' : '999px',
            height: SortBtn ? '168px' : '55px',
            width: SortBtn ? '200px' : '55px',

          }} onClick={() => SortBtn === true ? setSortBtn(false) : setSortBtn(true)} className={`h-[55px] duration-300 w-[55px] AddBtn cursor-pointer ${SortBtn ? '' : 'hover:bg-[#9596e0]'} overflow-hidden text-[65px] rounded-full flex items-center absolute bottom-[75px] right-[12px] text-white bg-[#6366f1] `}>
            {!SortBtn && <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"

              className="w-[30px] h-[30px] m-auto "

            >
              <circle cx="5" cy="12" r="2" fill="white" />
              <circle cx="12" cy="12" r="2" fill="white" />
              <circle cx="19" cy="12" r="2" fill="white" />
            </svg>}
            {SortBtn && <div className=" "><div onClick={()=>{(setSortType("priority"),setShowSort(true))}} className="hover:bg-[#9596e0] rounded-t-[8px] w-[200px] text-[14px] p-[11px] ">Sort by priority</div>
              <div className="hover:bg-[#9596e0] w-[200px] text-[14px] p-[10px] ">Sort by Completion</div>
              <div onClick={()=>{(setSortType("completion"),setShowSort(true))}} className="hover:bg-[#9596e0] w-[200px] text-[14px] p-[10px] ">Sort by Date</div>
              <div className="hover:bg-[#9596e0] rounded-b-[8px] w-[200px] text-[14px] p-[11px] ">Remove Sorting</div></div>}

          </div>
          <TaskBar /> -

          <div className=''>
            {AddTaskBtn && <form onSubmit={handleAddTask} className="my-4 flex justify-center">
              <input
                style={{
                  backgroundColor: darkModeStatus ? '#9596e0' : 'white',
                  color: darkModeStatus ? 'white' : 'black',
                  border: "none", outline: "none", borderRadius: "8px", boxShadow: darkModeStatus
                    ? "0 0 10px 1px #ffffff"
                    : "0 0 7px 1px #6366f1",
                }}
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className={`cursor-pointer border p-2 m-2 ${darkModeStatus ? "placeholder-white" : "placeholder-black"} `}
                required
              />
              <input
                type="date"
                style={{
                  backgroundColor: darkModeStatus ? '#9596e0' : 'white',
                  color: darkModeStatus ? 'white' : 'black',
                  border: "none", outline: "none", borderRadius: "8px", boxShadow: darkModeStatus
                    ? "0 0 10px 1px #ffffff"
                    : "0 0 7px 1px #6366f1",
                }}
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                className="border p-2 m-2 cursor-pointer "
                required
              />
              <select
                value={priority}
                style={{
                  backgroundColor: darkModeStatus ? '#9596e0' : 'white',
                  color: darkModeStatus ? 'white' : 'black',
                  border: "none", outline: "none", borderRadius: "8px", boxShadow: darkModeStatus
                    ? "0 0 10px 1px #ffffff"
                    : "0 0 7px 1px #6366f1",
                }}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 m-2 cursor-pointer "
                required
              >
                <option value="" disabled>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <select
                value={category}
                style={{
                  backgroundColor: darkModeStatus ? '#9596e0' : 'white',
                  color: darkModeStatus ? 'white' : 'black',
                  border: "none", outline: "none", borderRadius: "8px", boxShadow: darkModeStatus
                    ? "0 0 10px 1px #ffffff"
                    : "0 0 7px 1px #6366f1",
                }}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 m-2 cursor-pointer "
                required
              >
                <option value="" disabled>Select Category</option>
                <option value="MyDay">My Day</option>
                <option value="Home">Home</option>
                <option value="College">College</option>
                <option value="Work">Work</option>
              </select>

              <button
                type="submit"
                className="bg-blue-500 rounded-[8px] text-white px-4 py-2 m-2"
              >
                Add Task
              </button>
            </form>}

            {(!ShowHomeTask && !ShowWorkTask && !ShowSort && !ShowCollegeTask && !ShowMyDayTask) && <div className="task-list">
              {tasks.map((task) => (
                <Task
                  key={task.Sno}
                  Sno={task.Sno}
                  Task={task.Task}
                  CompletionDate={task.CompletionDate}
                  Priority={task.Priority}
                  Category={task.Category}
                />
              ))}
            </div>}


          </div>

          {tasks.length === 0 ? <h1 style={{
            color: darkModeStatus ? 'white' : 'black',
          }} className='text-center m-5'>NO TASK ADDED</h1> : ""}

          {(homeTasks.length > 0 && ShowHomeTask) && (
            <div>
              {homeTasks.map((task) => (
                <Task
                  key={task.Sno}
                  Sno={homeTasks.length}
                  Task={task.Task}
                  CompletionDate={task.CompletionDate}
                  Priority={task.Priority}
                  Category={task.Category}
                />
              ))}
            </div>
          )}
          {(ShowHomeTask && homeTasks.length === 0) && (
            <h1 style={{
              color: darkModeStatus ? 'white' : 'black',
            }}
              className='text-center m-5 '>NO HOME TASK</h1>
          )}

          {ShowSort && <div className="task-list">
            {sortTasks(tasks).map((task) => (
              <Task
                key={task.Sno}
                Sno={task.Sno}
                Task={task.Task}
                CompletionDate={task.CompletionDate}
                Priority={task.Priority}
                Category={task.Category}
              />
            ))}
          </div>}

          {(CollegeTasks.length > 0 && ShowCollegeTask) && (
            <div>
              {CollegeTasks.map((task) => (
                <Task
                  key={task.Sno}
                  Sno={CollegeTasks.length}
                  Task={task.Task}
                  CompletionDate={task.CompletionDate}
                  Priority={task.Priority}
                  Category={task.Category}
                />
              ))}
            </div>
          )}
          {(ShowCollegeTask && CollegeTasks.length === 0) && (
            <h1 style={{
              color: darkModeStatus ? 'white' : 'black',
            }}
              className='text-center m-5 '>NO COLLEGE TASK</h1>
          )}

          {(MyDayTasks.length > 0 && ShowMyDayTask) && (
            <div>
              {MyDayTasks.map((task) => (
                <Task
                  key={task.Sno}
                  Sno={MyDayTasks.length}
                  Task={task.Task}
                  CompletionDate={task.CompletionDate}
                  Priority={task.Priority}
                  Category={task.Category}
                />
              ))}
            </div>
          )}
          {(ShowMyDayTask && MyDayTasks.length === 0) && (
            <h1 style={{
              color: darkModeStatus ? 'white' : 'black',
            }}
              className='text-center m-5 '>NO MY DAY TASK</h1>
          )}

          {(WorkTasks.length > 0 && ShowWorkTask) && (
            <div>
              {WorkTasks.map((task) => (
                <Task
                  key={task.Sno}
                  Sno={WorkTasks.length}
                  Task={task.Task}
                  CompletionDate={task.CompletionDate}
                  Priority={task.Priority}
                  Category={task.Category}
                />
              ))}
            </div>
          )}
          {(ShowWorkTask && WorkTasks.length === 0) && (
            <h1 style={{
              color: darkModeStatus ? 'white' : 'black',
            }}
              className='text-center m-5 '>NO WORK TASK</h1>
          )}

        </div>
      </div>
    </>
  );
}

export default App;
