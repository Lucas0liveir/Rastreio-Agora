import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch'
import { checkUpdateOnPackagesStatus } from './SendNotifications';

const BACKGROUND_FETCH_TASK = 'background-fetch';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    try {
        const receiveData = await checkUpdateOnPackagesStatus()

        return BackgroundFetch.BackgroundFetchResult.NewData

    } catch (e) {
        console.log(e)
    }
})

async function registerBackgroundFetchAsync() {
    return await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 2,
        stopOnTerminate: false, // android only,
        startOnBoot: true, // android only
    });
}

async function unregisterBackgroundFetchAsync() {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export { registerBackgroundFetchAsync, unregisterBackgroundFetchAsync }
