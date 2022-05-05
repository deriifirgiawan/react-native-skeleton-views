import React, {useEffect} from 'react';
import {StyleSheet, View, Animated, Easing, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { TypesProps } from './TypeProps';

const { width } = Dimensions.get('window');

export const SkeletonView: React.FC<TypesProps> = ({
    style,
    backgroundColor = '#E2E9ED',
    duration = 1000,
    highlightColor,
}) => {
    const Styles = StyleSheet.create({
        DefaultStyle: {overflow: 'hidden', backgroundColor: backgroundColor},
    });
    return (
        <View style={[style, Styles.DefaultStyle]}>
            <SkeletonAnimation
                duration={duration}
                highlightColor={highlightColor}
                backgroundColor={backgroundColor}
            />
        </View>
    );
};

const SkeletonAnimation: React.FC<TypesProps> = ({
    backgroundColor = '#E2E9ED',
    highlightColor = '#D9E0E3',
    duration = 1000,
}) => {
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    });

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width],
    });
    return (
        <View style={styles.Wrapper}>
            <Animated.View style={[styles.DefaultSize, {transform: [{translateX: translateX}]}]}>
                <LinearGradient
                    colors={[backgroundColor, highlightColor, highlightColor, backgroundColor]}
                    style={styles.DefaultSize}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        height: '100%',
    },
    DefaultSize: {width: '100%', height: '100%'},
});