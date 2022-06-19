import React from 'react'
import SearchBar from '../components/SearchBar'
import Result from '../components/Result';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Skeleton from '../components/Skeleton';
import Recommend from '../components/Recommend';
import UserModal from '../components/UserModal';
import RecommendModal from './../components/RecommendModal';
import Alert from '../components/Alert';
import BusinessPage from '../components/BusinessPage';


export default function PluginLayout() {

  const url = `${appLocalizer.apiUrl}/wprk/v1`;
  
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [readyData, setReadyData] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(true)
  const [openUser, setOpenUser] = useState(false)
  const [recommend, setRecommend] = useState(false)
  const [recoAlert, setRecoAlert] = useState(false)
  const [userAlert, setUserAlert] = useState(false)
  const [user, setUser] = useState(undefined)
  const [login, setLogin] = useState(undefined)
  const [biz, setBiz] = useState(undefined)




  useEffect(() => {
    const bus = Axios.get(`${url}/business`)
    const user = Axios.get(`${url}/user`)
    
    Axios.all([bus, user])
        .then(Axios.spread((...res)=> {
            const business = res[0].data
            const currUser = res[1].data;

        //  .then(res => {
          //  console.log("UserData: ", res[1].data)
          let cat = sortCategories(getCategories(business))
          setCategories(cat)
          setReadyData(business)
          setData(business)
          setUser(currUser)
          setLoading(false)
          // console.log("categories: ", cat)
         }))
    }, [])

    useEffect(() => {
      if(filters.length === 0){
        // console.log("FIlters is empty")
        setReadyData(data)
      }else{
        // console.log("FIlters is not empty")
        filterCategories()
      }
    }, [filters.length])

    useEffect(()=> {
      if(searchedData.length !== 0){
        let cate = sortCategories(getCategories(searchedData))
        setCategories(cate)
        setReadyData(searchedData)
        setData(searchedData)
        setLoading(false)
      }
    }, [searchedData])

    const handleSearchLoc = arg => {
      setLoading(true)
      setSearchedData(arg)
    }
    
    const getCategories = arg => {
      try {
        let arr = []
        arg.map(item => arr.push(...item.tags))
        let newArr = arr.filter(item => item.split('_')[0] === 'cat')
        .map(item => item.slice(4))
        return countOccurrences(newArr)
      } catch (error) {
        console.log(error)
      }
    }

    const countOccurrences = (arr) => {
      const map = {};
      for ( var i = 0; i < arr.length; i++ ) {
          map[arr[i]] = ~~map[arr[i]] + 1;
      }
      return map;
  }

  const sortCategories = arg => {
    try {
      let sorted = [];
      for (var c in arg) {
          sorted.push([c, arg[c]]);
      }
      sorted.sort((a, b) => b[1] - a[1]);
      return sorted;
    } catch (error) {
      console.log(error)
    }
  }

  const filterCategories = () => {
    let arr = []
    data.forEach(element => {
      filters.forEach(fil => {
        element.tags.forEach(tag => {
          if(tag.includes(fil)){
            arr.push(element)
          }
        });
      });
    });
    // console.log(arr)
    setReadyData(arr)
  }

  const add2Filter = ind => {
    setFilters(prev => {
      return [categories[ind][0], ...prev]
    })
  }

  const removeFilter = cat => {
    setFilters(prev => {
      return prev.filter(item => item !== cat)
    })
  }

  const clearFilter = () => {
    setFilters([])
  }

  const handleUser = () => {
    if(user){
      setRecommend(true)
    }else{
      setOpenUser(true)
    }
  }

  const reco = () => {
    setOpenUser(false)
    setUserAlert(true)
    setRecommend(true)
  }

  const handleBiz = () => {
    setBiz(undefined)
  }
  
  return (
    <div style={{width: '100%'}}>
        <Alert msg="Recommendation saved" type="Success" show={recoAlert}/>
        <Alert msg="You are signed up successfully" type="Success" show={userAlert}/>
        <Recommend user={user} openModal={handleUser}/>
        <SearchBar categories={categories} add2Filter={add2Filter} searchLoc={handleSearchLoc} />
        {loading && <div className='gb-flex'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>}
        {!loading && readyData.length !== 0 && biz === undefined && <Result setBiz={setBiz} data={readyData} loading={loading} filters={Array(...new Set(filters))} removeFilter={removeFilter} clearFilter={clearFilter} />}
        {!loading && biz !== undefined && <BusinessPage biz={biz} showBiz={handleBiz} />}
        {openUser && <UserModal close={() => setOpenUser(false)} reco={reco} login={setLogin} />}
        {recommend && <RecommendModal login={login} recoAlert={setRecoAlert} close={() => setRecommend(false)} />}
    </div>
  )
}
