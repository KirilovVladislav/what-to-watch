import { Catalog, Footer, Header } from '../../widgets'
import { useMyList } from '../../hooks'
import { Title, UserBlock } from '../../components'
import { useSelector } from 'react-redux'


const MyList = () => {
	const { filmsFromMyList } = useSelector((state) => state.user)
	const [handleToggleMyList] = useMyList()

	return (
		<>
			<Header >
				<Title >My list</Title>
				<UserBlock />
			</Header>
			<Catalog
				title={'Catalog'}
				hiddenTitle
				myList={filmsFromMyList}
				handleToggleMyList={handleToggleMyList} />
			<Footer />
		</>
	)
}

export default MyList