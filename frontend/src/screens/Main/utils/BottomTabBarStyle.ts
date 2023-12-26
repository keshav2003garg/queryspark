type TabStyleType = {
    marginHorizontal: number;
    marginBottom: number;
    position: 'absolute';
    bottom: number;
    backgroundColor: string;
    borderColor: string;
    borderRadius: number;
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
};

const TabStyle: TabStyleType = {
    marginHorizontal: 40,
    marginBottom: 10,
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#F79A11',
    borderColor: '#F79A11',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 7,
};

export default TabStyle;
