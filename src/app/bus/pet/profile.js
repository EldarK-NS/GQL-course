import React from 'react'
import { useQueryProfile } from './hooks/useQueryProfile/index';

export const Profile = () => {

    const { getProfile, loading, error, profile } = useQueryProfile()

    const loadProfile = () => {
        getProfile({
            variables: {
                id: "C-1"
            }
        })
    }
    console.log(profile)
    if (loading) {
        return (<p>"loading ..."</p>)
    }
    if (error) {
        return (
            <p>We ahve a problem: {error.message}</p>
        )
    }

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={loadProfile}>Load Profile</button>
            <p>
                {profile && profile.name}
            </p>
        </div>
    )
}
