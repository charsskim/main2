export default function Layout({ children, title }) {
	return (
		<main className={`Layout ${title}`}>
			<h2>{title}</h2>
			{children}
		</main>
	);
}
