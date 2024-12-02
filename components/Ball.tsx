import Animated, {
	useFrameCallback,
	useAnimatedStyle,
} from 'react-native-reanimated';
import { ballSpeed, boardHeight, width, ballRadius } from '@/constants/Game';

export default function Ball({ ball }: { ball: any }) {
	useFrameCallback((frameInfo) => {
		let { x, y, r, dx, dy } = ball.value;
		const delta = (frameInfo.timeSincePreviousFrame || 0) / 1000;
		x += dx * delta * ballSpeed;
		y += dy * delta * ballSpeed;

		// prevent ball from going off the screen (passing thorugh the walls)
		if (y < r) {
			dy *= -1;
			y = r;
		}

		if (y > boardHeight - r) {
			dy *= -1;
			y = boardHeight - r;
		}

		if (x > width - r) {
			dx *= -1;
			x = width - r;
		}

		if (x < r) {
			dx *= -1;
			x = r;
		}

		ball.value = { ...ball.value, x, y, dx, dy };
	});

	const ballStyle = useAnimatedStyle(() => {
		const { x, y, dx, dy, r } = ball.value;
		return {
			left: x - r,
			top: y - r,
			// static
			width: r * 2,
			height: r * 2,
			backgroundColor: 'white',
			aspectRatio: 1,
			borderRadius: ballRadius,
			position: 'absolute',
		};
	});

	return <Animated.View style={ballStyle} />;
}
