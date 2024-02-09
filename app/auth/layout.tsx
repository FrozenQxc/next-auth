const AuthLayout = ({ children }: any) => {
	return (
		<div>
			<nav className='bg-red text-white bg-black'>This is auth navbar</nav>
			{children}
		</div>
	)
}

export default AuthLayout
