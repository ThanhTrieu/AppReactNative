import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Keyboard, TextInput} from 'react-native';

class TestComponentDidMount extends React.Component {
    componentDidMount() {
        if(this.props.title){
            //console.log('nhu vay la component da duoc dung xong');
        }
    }
    componentWillReceiveProps(newProps) {
        //console.log(newProps);
        if(newProps !== this.props.foo){
            return true;
        }
    }
    shouldComponentUpdate(nextProps, nextSate){
        //console.log(nextProps); 
        return true;
    }
    componentWillUpdate(nextProps, nextSate) {
        console.log(nextProps);
    }
    componentDidUpdate(prevProps, prevState) {

    }

    render(){
        return(
            <View>
                {/* <Text>{this.props.title}</Text> */}
                <Text>{this.props.foo}</Text>
            </View>
        );
    }
}

class TestComponent extends React.Component {
    render() {
        return(
            <View><Text>AAAA</Text></View>
        );
    }
}

const myComponent = ({}) => (
    <Text>XXXXX</Text>
);

export default class LifeCyle extends React.Component {
    // Propsdefault
    // khai bao gia tri mac dinh cho props - thang chay truoc ca constructor
    static defaultProps = {
        color : 'blue'
    }
    // quy uoc kieu du lieu cho props
    static propsTypes = {
        color: PropTypes.string
    }


    // tim hieu cac method lifecyle cua react
    // Co the noi lifeCyle no kha giong voi Magic Method ben PHP
    // JS - duoc khai bao thuoc tinh o day

    //LifeCyle thu nhat:
    constructor(props){
        // constructor : giong nhu __construct ben PHP
        super(props);  // giong nhu parent::__construct();
        // voi muc dich de sau nay du dung dc "this.props.NAME-PROPS";
        // tu khoa super : chong override.
        // thong thuong method nay hay dung de khoi tao cac thuoc tinh trong class JS.
        // khac voi PHP, co the khai bao thuoc tinh ngoai construct (nam trong class), JS khong chap nhan, ma khuyen nen khai bao o day.
        // ex
        // ban vua khai bao thuoc tinh age
        //this.age = 28;
        // dinh nghia state
        this.state = {
            age : 28,
            name: 'NTT',
            time: 0
        };
        // console.log('da chay vao day');
    }

    time = 0;
    keyboardDidShowListener = {}
    keyboardDidHideListener = {}

    _keyboardDidShow () {
        console.log('Keyboard Shown');
    }

    _keyboardDidHide () {
        console.log('Keyboard Hidden');
    }

    // LifeCyle thu 2
    // ReactJS sap ra ban moi nen ham nay se bi xoa va thay thanh UNSAFE_componentWillMount
    // hien tai thi no van support
    componentWillMount(){
        // ham nay se chi chay 1 lan duy nhat trong 1 lifeCyle(vond doi)
        // no luon la method chay thu 2 sau thang constructor - khi no va constructor dc dinh nghia
        // voi y nghia do thi thong thuong ham nay hay thiet lap lai cac state hay props mac dinh nao do.
        // Co le vi no lam dieu ma thang constructor da lam nen bi ReactJS xoa. (dang tim hieu sau hon nguyen nhan)
        // console.log('chay xong constructor - thi toi luot');

    }

    componentWillUnmount () {
        // ham nay se chi chay 1 lan duy nhat trong 1 lifeCyle(vond doi)
        // ham nay se duoc goi khi 1 component bi unmount
        // thang nay se luon chay cuoi cung trong cac lifeCyle - giong nhu __destruct trong PHP.
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        
    }

    componentDidMount(){
        // ham nay se chi chay 1 lan duy nhat trong 1 lifeCyle(vond doi)
        // ham nay se chay sau render() - nghia la no se doi cac Component load xong
        // nghia la cac cac ket qua duoc hien thi toan bo len thiet bi thi ham nay bat dau chay
        // thong thuong ham nay hay xu ly viec thay doi data tu phia server hay api (hay co the la tu 1 function xu ly data kieu ASY(kieu dong do)) va cap nhat lai vao state de cap nhat lai vao DOM
        // vi khi state thay doi thi no se keo theo UI - COMPONENT thay doi theo.

        /*  Test componentWillUnmount  */
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        this.setState({age: 500});
    }
    
    // cung la 1 lifeCyle duoc React JS dinh nghia cho ban
    render() {
        //console.log(this.state.time);
        // console.log('chay xong 2 dai ca ben tren thi tuot luot');
        // ham nay buoc phai return ve 1 cai gi do
        // o day thong thuong hay return ve DOM JSX (DOM JSX - cu hieu nom-na nhu kieu viet cac ma HTML nhung gio cac the HTML duoc React dinh nghia cho ban - phai ghi nho )
        // hay co nghia ham nay se load va dung nen 1 cai UI - Component

        return(
            <View>
                {/* title duoc goi la props */}
                <Text ref="wss">Hello</Text>
                {/* goi component khac */}
                {/* <TestComponentDidMount title="hi"/> */}
                {/* LOVE YOU : props children */}
                <TestComponentDidMount foo={this.state.age}/>
                <TextInput 
                    style={{width: 200, borderWidth:2, marginTop:300}} 
                    ref='username'
                    keyboardType='default'
                    returnKeyType='next'
                    value={this.props.color}
                />
            </View>
        );
    }
    // Tat ca cac lifeCyle ben tren no chay khi ap bat dau duoc start.
    // Cac lifeCyle ben duoi se duoc chay khi STATE hay PROPS thay doi

    /* khi PROPS thay doi - thi cac lifeCyle gi se duoc trieu goi */
    // ham nay se nhan 1 props moi da duoc thay doi tu component cha truyen xuong
    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }
    // sau do ham shouldComponentUpdate se duoc goi
    shouldComponentUpdate(nextProps, nextSate){
        return false;
    }
    // ham nay bat buoc return true or false
    // neu true se tiep tuc thuc thi componentWillUpdate - neu false no ko lam gi nua
    componentWillUpdate(nextProps, nextSate){

    }
    // tiep do se render lai cac UI - Component
    // tiep theo neu ban muon update lai cai gi lan cuoi se goi ham
    componentDidUpdate(prevProps, prevState){

    }

    /* khi STATE thay doi thi cac ham nao se duoc goi */
    // giong nhu truong hop khi props thay doi nhung se khong bao gio thuc thi componentWillReceiveProps().
    // sau do la cac buoc nhu khi props thay doi

    /* khi app dang thuc thi ma 1 component nao do bi unmount thi se thuc thi componentWillUnmount() va ket thuc 1 lifecyle */

}