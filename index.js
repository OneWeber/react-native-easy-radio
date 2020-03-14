import React, {Component} from 'react';
import {StyleSheet, View, Text, ViewPropTypes, TouchableOpacity, Animated} from 'react-native';
import {PropTypes} from 'prop-types'
export default class RNEasyRadio extends Component{
    constructor(props) {
        super(props);
        this.state = {
            is_active_index: this.props.init_index,
            bounceValue: new Animated.Value(0.8),
        }
    }
    static propTypes = {
        r_props: PropTypes.array,
        arrange_style: ViewPropTypes.style,
        btn_margin: PropTypes.number,
        con_left: PropTypes.number,
        con_right: PropTypes.number,
        btn_type: PropTypes.string,
        btn_size: PropTypes.number,
        outside_style: ViewPropTypes.style,
        gap: PropTypes.number,
        theme: PropTypes.string,
        init_index: PropTypes.number,
        text_style: ViewPropTypes.style,
        is_animate: PropTypes.bool,
    }
    static defaultProps = {
        r_props: [
            {label: '按钮1', val: 0},
            {label: '按钮1', val: 1},
        ],
        arrange_style:{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center'},
        btn_margin: 15,
        con_left: 10,
        con_right: 10,
        btn_type: 'roll',
        btn_size: 20,
        btn_radius: 3,
        gap: 3,
        theme: '#14c5ca',
        init_index: 0,
        text_style: {marginLeft: 5, color: '#333'},
        is_animate: true
    }
    changeVal(index){
        this.setState({
            is_active_index: index
        }, () => {
            this.state.bounceValue.setValue(1.5);
            Animated.spring(
                this.state.bounceValue,
                //将bounceValue的值动画化，是一个持续变化的过程
                {
                    toValue: 0.8,
                    friction: 1,
                }
            ).start();
        })
    }
    render(){
        const {r_props, btn_margin, con_left, con_right, btn_size, btn_type, btn_radius, outside_style, gap, theme, is_animate, text_style} = this.props
        const {is_active_index} = this.state
        return(
            <View style={[this.props.arrange_style]}>
            {
                r_props.map((item, index) => {
                    return <TouchableOpacity style={[styles.item_con,{
                        marginLeft: index === 0 ? con_left : 0,
                            marginRight: index === (r_props.length-1) ? con_right : btn_margin
                    }]}
                    onPress={() => {
                        this.props.onPress(item.label, item.val, index);
                        this.changeVal(index)
                    }}
                >
                <View style={[{
                            width: btn_size,
                            height: btn_size,
                            borderRadius: btn_type === 'roll' ? btn_size/2 : btn_radius,
                            borderWidth: 1,
                            borderColor: theme,
                            justifyContent: "center",
                            alignItems: "center"
                        },outside_style]}>
                    {
                        is_active_index === index
                            ?
                    <View>
                    {
                        is_animate
                        ?
                    <Animated.View style={{
                        width: btn_size - gap - 1,
                            height: btn_size - gap - 1,
                            borderRadius: btn_type === 'roll' ? (btn_size - gap - 1)/2 : btn_radius,
                            backgroundColor: theme,
                            transform: [
                            {scale: this.state.bounceValue},
                        ]
                    }}>
                    </Animated.View>
                    :
                    <View style={{
                        width: btn_size - gap - 1,
                            height: btn_size - gap - 1,
                            borderRadius: btn_type === 'roll' ? (btn_size - gap - 1)/2 : btn_radius,
                            backgroundColor: theme
                    }}>
                    </View>
                    }
                    </View>
                    :
                        null
                    }
                </View>
                    <Text style={[text_style]}>{item.label}</Text>
                        </TouchableOpacity>
                })
            }
            </View>
    )
    }
}
const styles = StyleSheet.create({
    item_con: {
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: "row",
    }
})

