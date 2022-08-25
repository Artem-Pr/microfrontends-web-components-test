export const style = {
    container: {
        height: '100%',
        position: 'relative',
        minHeight: 300,
        minWidth: 'fit-content',
        width: '60vw'
    },
    loading: {
        width: '60vw',
        height: '50vh',
        position: 'relative'
    },
    row: {
        display: 'grid',
        gridTemplateColumns: [[100, 150, 600, 150]]
    },
    '@media (max-width: 1200px)': {
        row: {
            gridTemplateColumns: [[100, 150, 600, 150]]
        }
    }
};
