import notifee from '@notifee/react-native';

module.exports = async (taskData) => {
    onsole.log('running task')
    async function onDisplayNotification() {
    
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        await notifee.displayNotification({
          title: 'Teste',
          body: 'Seu pacote foi atualizado',
          android: {
            channelId,
            // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            // pressAction: {
            //   id: 'default',
            // },
          },
        });
      }

     await onDisplayNotification()
};