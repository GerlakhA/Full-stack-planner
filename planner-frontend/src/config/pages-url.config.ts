class DASHBOARD {
	private root = '/main'

	HOME = this.root
	TASKS = `${this.root}/tasks`
	KANBAN = `${this.root}/kanban-mode`
	TIMER = `${this.root}/timer`
	TIME_BLOCKING = `${this.root}/time_blocking`
	SETTINGS = `${this.root}/settings`
}

export const DASHBOARD_PAGES = new DASHBOARD()
