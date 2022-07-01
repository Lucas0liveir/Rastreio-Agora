import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PackageDTO } from '../dtos/PackageDTOS';
import { api } from './api';

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

export async function checkUpdateOnPackagesStatus() {

  try {
    console.log('task is running')
    const response = await AsyncStorage.getItem('@app-rastreioAgora:packages')

    if (!response) {
      return
    }

    const packages = JSON.parse(response) as PackageDTO[]

    //Filtra somente os objetos que ainda não foram entregues.
    const packagesFiltered = packages.filter(item => !item.eventos[0]?.descricao.includes('entregue ao destinatário'))

    //Pega todos os codigos de rastreio
    const objectCodes = [...packagesFiltered
      .map(item => item.codObjeto)]

    if (objectCodes.length === 0) {
      return
    }

    const { data } = await api.post('/track', { codes: objectCodes }) as { data: PackageDTO[]}

    //Verifica se existe diferença entre os dados das encomendas armazenadas no storage e as buscadas na API
    const isDiff = diffBetweenPackages(packagesFiltered, data)

    //Se for diferente notifica o usuário de que houve atualização nas encomendas dele
    if (isDiff) {
      await onDisplayNotification()
    }

  } catch (e) {
    console.log(e)
  }
}

export function diffBetweenPackages(packages: PackageDTO[], newPackages: PackageDTO[]) {

  for (let i = 0; i < newPackages.length; i++) {
    if (newPackages[i].eventos?.length !== packages[i].eventos?.length) {
      return true
    }
  }

  return false
}