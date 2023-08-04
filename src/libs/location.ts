
import useSWR from 'swr';
import {  fetcherHidden } from '@/utils/axios';


const token = `2f242cc322ff36`
async function getLocation() {
  const { data, error, isLoading } = useSWR(`https://ipinfo.io/json?token=${token}`, fetcherHidden)
}

export default getLocation;
