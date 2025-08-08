import { useState, useEffect } from 'react';
import './GitHubCard.css';
import IsometricContributions from './IsometricContributions';

interface GitHubStats {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  contributions?: {
    total: number;
    last12Months: number;
    monthlyContributions: Array<{
      month: string;
      count: number;
    }>;
  };
}

const GitHubCard = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contributionGrid, setContributionGrid] = useState<Array<{count: number; month: string}>>([]);
  const [show3D, setShow3D] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchGitHubStats();
    
    // 检测深色模式
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // 监听深色模式变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log('Show3D state changed:', show3D);
    console.log('Current contributionGrid:', contributionGrid);
  }, [show3D, contributionGrid]);

  const fetchGitHubStats = async () => {
    try {
      // 获取基本信息
      const response = await fetch('https://api.github.com/users/xinyuguan3');
      if (!response.ok) throw new Error('Failed to fetch GitHub stats');
      const data = await response.json();

      // 获取贡献数据
      const contributionsResponse = await fetch('https://github-contributions-api.jogruber.de/v4/xinyuguan3?y=2025');
      if (!contributionsResponse.ok) throw new Error('Failed to fetch contributions');
      const contributionsData = await contributionsResponse.json();

      // 获取最近12个月的日期范围
      const today = new Date();
      const twelveMonthsAgo = new Date(today);
      twelveMonthsAgo.setMonth(today.getMonth() - 11); // -11 是因为要包含当月

      // 处理贡献数据
      const contributions = contributionsData.contributions || [];
      
      // 按月统计贡献
      const monthlyContributions = [];
      for (let i = 0; i < 12; i++) {
        const monthDate = new Date(twelveMonthsAgo);
        monthDate.setMonth(twelveMonthsAgo.getMonth() + i);
        
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        
        // 计算当月贡献
        const monthContributions = contributions.filter((c: any) => {
          const contribDate = new Date(c.date);
          return contribDate.getFullYear() === year && contribDate.getMonth() === month;
        });
        
        const monthCount = monthContributions.reduce((sum: number, day: any) => sum + (parseInt(day.count) || 0), 0);
        
        const monthName = monthDate.toLocaleDateString('zh-CN', { month: 'short' });
        monthlyContributions.push({
          month: monthName,
          count: monthCount
        });
      }

      // 计算最近12个月的总贡献数
      const last12MonthsTotal = monthlyContributions.reduce((sum, month) => sum + month.count, 0);

      console.log('Monthly contributions:', monthlyContributions);
      console.log('Last 12 months total:', last12MonthsTotal);

      setContributionGrid(monthlyContributions);
      setStats({
        ...data,
        contributions: {
          total: contributions.reduce((sum: number, day: any) => sum + (parseInt(day.count) || 0), 0),
          last12Months: last12MonthsTotal,
          monthlyContributions: monthlyContributions
        }
      });
    } catch (err) {
      setError('无法加载 GitHub 数据');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getContributionColor = (count: number) => {
    // 调整颜色阈值以适应月度贡献
    if (count === 0) return 'var(--contribution-0)';
    if (count <= 10) return 'var(--contribution-1)';
    if (count <= 30) return 'var(--contribution-2)';
    if (count <= 60) return 'var(--contribution-3)';
    return 'var(--contribution-4)';
  };

  if (loading) return <div className="github-loading">加载中...</div>;
  if (error) return <div className="github-error">{error}</div>;
  if (!stats) return null;

  return (
    <div className="github-card">
      <div className="github-header">
        <img src={stats.avatar_url} alt={stats.name} className="github-avatar" />
        <div className="github-info">
          <h2>{stats.name || stats.login}</h2>
          <p className="github-bio">{stats.bio || '暂无简介'}</p>
        </div>
        <a href={`https://github.com/${stats.login}`} target="_blank" rel="noopener noreferrer" className="github-logo">
          <svg height="32" viewBox="0 0 16 16" width="32">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
      
      {/* <div className="github-stats">
        <div className="stat-item">
          <span className="stat-label">仓库</span>
          <span className="stat-value">{stats.public_repos}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">关注者</span>
          <span className="stat-value">{stats.followers}</span>
        </div>
      </div> */}

      <div className="github-contributions">
        <h3>Recent 12 Months Contributions</h3>
        <div className="contributions-view-toggle">
          <button 
            className={`view-button ${!show3D ? 'active' : ''}`}
            onClick={() => {
              console.log('Switching to 2D view');
              setShow3D(false);
            }}
          >
            2D
          </button>
          <button 
            className={`view-button ${show3D ? 'active' : ''}`}
            onClick={() => {
              setShow3D(true);
            }}
          >
            3D
          </button>
        </div>
        
        {show3D ? (
          <IsometricContributions contributions={contributionGrid.map(item => ({
            month: item.month,
            count: item.count
          }))} />
        ) : (
          <>
            <div className="monthly-contributions-graph">
              {contributionGrid.map((month, index) => (
                <div
                  key={index}
                  className="contribution-month"
                  style={{ backgroundColor: getContributionColor(month.count) }}
                  title={`${month.month} - ${month.count} contributions`}
                >
                  <span 
                    className="month-label"
                    style={{ 
                      color: isDarkMode && month.count <= 10 ? 'rgba(255, 255, 255, 0.9)' : 'var(--background)',
                      textShadow: isDarkMode && month.count <= 10 ? 'none' : '0 0 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {month.month}
                  </span>
                  <span 
                    className="month-count"
                    style={{ 
                      color: isDarkMode && month.count <= 10 ? 'rgba(255, 255, 255, 0.9)' : 'var(--background)',
                      textShadow: isDarkMode && month.count <= 10 ? 'none' : '0 0 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {month.count}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="contributions-count">
          {stats.contributions?.last12Months || 0} contributions (last 12 months)
        </div>
      </div>
    </div>
  );
};

export default GitHubCard; 