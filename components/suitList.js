const marks = [
    {
        id: 1,
        mark: 'Mark XL',
        nickname:'SHOTGUN',
        price: 10000000
    },
    {
        id: 2,
        mark: 'Mark XLI',
        nickname:'BONES',
        price: 10000000
    },
    {
        id: 3,
        mark: 'Mark XLII',
        nickname:' ',
        price: 10000000
    },
    {
        id: 4,
        mark: 'Mark XLIII',
        nickname:' ',
        price: 10000000
    },
    {
        id: 5,
        mark: 'Mark XLIV',
        nickname:'HULKBUSTER',
        price: 10000000
    },
    {
        id: 6,
        mark: 'Mark XLV',
        nickname:' ',
        price: 10000000
    },
    {
        id: 7,
        mark: 'N/A',
        nickname:'IRON LEGION',
        price: 10000000
    },
    {
        id: 8,
        mark: 'Mark XLVI',
        nickname:' ',
        price: 10000000
    },
    {
        id: 9,
        mark: 'Mark XLVII',
        nickname:' ',
        price: 10000000
    },
    {
        id: 10,
        mark: 'Mark XLVIII',
        nickname:'HULK BUSTER MARK 2',
        price: 10000000
    },
    {
        id: 11,
        mark: 'Mark XLIX',
        nickname:'RESCUE',
        price: 10000000
    },
    {
        id: 12,
        mark: 'Mark L',
        nickname:'BLEEDING EDGE',
        price: 10000000
    },
    {
        id: 13,
        mark: 'Mark LXXXV',
        nickname:'ULTIMATE ARMOR',
        price: 10000000
    },
]

const HouseList = () => {
    return (
        <>
            <div className='row b-2'>
                <h5 className='themeColor text-center'>
                    Suites availible for purchase
                </h5>
                <table className='table table-hover'>
                    <thread>
                        <tr>
                            <th>Mark</th>
                            <th>Nickname</th>
                            <th>Asking Price</th>
                        </tr>
                    </thread>
                    <tbody>
                        {marks.map(m => (
                            <tr key={m.id}>
                                <td>{m.mark}</td>
                                <td>{m.nickname}</td>
                                <td>{m.price}</td>
                            </tr>
                        ))}
                    </tbody>    
                </table>
            </div>
        </>
    )
};