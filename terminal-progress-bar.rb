def progress_bar
  x = 0
  z = 50

  while x < z do
    print '[' + ('#'*x) + (" "*(z-x)) + ']' + "#{x*100/z}%" + "\r"
    x = x + 1
    sleep 0.01
  end

  puts '[' + ('#'*x)  + (" "*(z-x)) + ']' + "#{x/z*100}%"

  x = 0
  z = 50

  z.times do
    print '[' + ('#'*x) + (" "*(z-x)) + ']' + "#{x*100/z}%" + "\r"
    x = x + 1
    sleep 0.1
  end
end

progress_bar
