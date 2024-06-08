// src/components/KanbanBoard.js
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './KanbanBoard.css';

const Board = ({ children }) => (
  <div className="board">{children}</div>
);

const ColumnContainer = ({ children }) => (
  <div className="column-container">{children}</div>
);

const TaskContainer = ({ children, isDragging }) => (
  <div className={`task-container ${isDragging ? 'dragging' : ''}`}>{children}</div>
);

const Task = ({ task, index, moveTask }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { index }
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    }
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <TaskContainer>{task}</TaskContainer>
    </div>
  );
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: ['Express', 'Postman'],
    inProgress: ['React', 'Node Js'],
    done: ['HTML', 'CSS']
  });

  const moveTask = (fromIndex, toIndex, source, destination) => {
    const sourceTasks = [...tasks[source]];
    const destinationTasks = [...tasks[destination]];
    const [removed] = sourceTasks.splice(fromIndex, 1);
    destinationTasks.splice(toIndex, 0, removed);
    setTasks({
      ...tasks,
      [source]: sourceTasks,
      [destination]: destinationTasks
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Board>
        {['todo', 'inProgress', 'done'].map((column) => (
          <ColumnContainer key={column}>
            <h2 className='clmcntnrh2'>{column}</h2>
            {tasks[column].map((task, index) => (
              <Task
                key={task}
                index={index}
                task={task}
                moveTask={(fromIndex, toIndex) => moveTask(fromIndex, toIndex, column, column)}
              />
            ))}
          </ColumnContainer>
        ))}
      </Board>
    </DndProvider>
  );
};

export default KanbanBoard;

