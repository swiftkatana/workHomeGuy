import { Socket } from 'socket.io'
class OnlineUsers {
	private usersOnline: Record<string, Socket> = {}

	public length = 0

	public addUser = (_id: string, socket: Socket) => {
		this.usersOnline[_id] = socket
		socket.data._id = _id
		this.length += 1
		console.log('login _id', _id)
	}

	public removeUser = (_id: string) => {
		this.length -= 1
		console.log('logout', _id)
		delete this.usersOnline[_id]
	}
}

export default new OnlineUsers()
