const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddlewares');

// Routes for CRUD operations on projects
router.get('/api/projects', authMiddleware.authenticateUser, projectController.getAllProjects);
router.get('/api/projects/:project_id', authMiddleware.authenticateUser, projectController.getProjectById);
router.post('/api/projects', authMiddleware.authenticateUser, projectController.addProject);
router.delete('/api/projects/:project_id', authMiddleware.authenticateUser, projectController.deleteProject);

// Routes for Tasks
router.post('/api/tasks', authMiddleware.authenticateUser, projectController.addTask);
router.put('/api/tasks/status', authMiddleware.authenticateUser, projectController.updateTaskStatus);
router.post('/api/tasks/assign', authMiddleware.authenticateUser, projectController.assignTask);
router.get('/api/tasks/:task_id', authMiddleware.authenticateUser, projectController.getTaskById);
router.get('/api/tasks/project/:project_id', authMiddleware.authenticateUser, projectController.getTasksByProjectId);
router.get('/api/tasks', authMiddleware.authenticateUser, projectController.getAllTasks); // Add this route
router.get('/api/tasks/due-tomorrow/:email', authMiddleware.authenticateUser, projectController.getTasksDueTomorrowByEmail);



module.exports = router;
