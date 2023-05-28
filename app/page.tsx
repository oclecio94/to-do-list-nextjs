"use client";

import { BsListTask } from "react-icons/bs";

import { useRef, useState, useMemo } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");

  const inputTask = useRef<HTMLInputElement>(null);

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        return task.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
      }),
    [tasks, filter]
  );

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputTask.current) return;
    const value = inputTask.current.value;
    setTasks((prev) => [...prev, value]);
    inputTask.current.value = "";
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  return (
    <main className="bg-gray-500 h-screen flex flex-col justify-center items-center font-bold">
      <section className="h-screen w-[80%] md:w-[40%]">
        <h1 className="text-3xl mt-2">Lista de Tarefas</h1>
        <div className="flex flex-col">
          <span className="mt-2">Filtro:</span>
          <input
            className="w-[100%] h-[30px] border rounded-md mt-1"
            type="text"
            value={filter}
            onChange={handleFilter}
          />
        </div>

        <form className="flex flex-col" onSubmit={handleAddTask}>
          <span className="mt-2">Tarefas:</span>
          <input
            className="w-[100%] h-[30px] border rounded-md mt-1"
            type="text"
            ref={inputTask}
          />{" "}
          <button className="w-[100%] h-[35px] border rounded-md mt-4 hover:bg-gray-600 hover:text-white">
            Adicionar Tarefa
          </button>
        </form>
        <ul className="flex-start">
          {filteredTasks.map((task, index) => (
            <li className="mt-2 flex items-center" key={index}>
              <BsListTask className="mr-2 mt-1" />
              {task}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
