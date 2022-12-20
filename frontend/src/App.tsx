import { Component, createSignal, Show, Suspense } from 'solid-js';
import { Routes, Route } from '@solidjs/router'
import './App.scss';
import { Home, Auth } from './page'
import { Loading } from './component'
import { Dashboard } from './page/Dashboard';

export const App: Component = () => {
  const [ isAppLoading, setAppLoading ] = createSignal(true);

  return (
    <Show when={ isAppLoading() } keyed>
      <Suspense fallback={ Loading }>
        <Routes>
          <Route path='/' component={ Home } />
          <Route path='/auth' component={ Auth } />
          <Route path='/dashboard' component={ Dashboard } />
        </Routes>
      </Suspense>
    </Show>
  )
};
