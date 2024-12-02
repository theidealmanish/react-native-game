import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, View } from 'react-native';
import Ball from '@/components/Ball';
import { boardHeight } from '@/constants/Game';
import { useGameContext } from '@/contexts/Game';

export default function Game() {
	const { ball } = useGameContext();
	return (
		<SafeAreaView className='w-full h-full'>
			<View
				className={`w-full`}
				style={{
					height: boardHeight,
					backgroundColor: 'black',
				}}
			>
				<Ball ball={ball} />
			</View>
			<View className='mt-4'>
				<Button title='Move Ball' />
			</View>
		</SafeAreaView>
	);
}
